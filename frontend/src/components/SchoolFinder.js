import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import {
  GoogleMap,
  Circle,
  Marker,
  useLoadScript,
  InfoWindow
} from "@react-google-maps/api";
import "./SchoolFinder.css";
import { useLatLng } from "./context/LocationContext";


let center
const radius = 5000;
const apiKey = "AIzaSyAf9lx0qQs0BZiIhGLz8LsIX1ypDYyJ6go"
const libraries = ['places'];

const SchoolFinder = () => {
    const latLng = useLatLng();
    if(!latLng.lat && !latLng.lng){
      center = { lat: 6.927079, lng: 79.861244 };
    }

  const [map, setMap] = useState(null);
  const [circle, setCircle] = useState(null);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schoolCount, setSchoolCount] = useState(0)

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries
  });

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const onCircleLoad = (circle) => {
    setCircle(circle);
  };

  useEffect(() => {
    center = {lat:Number(latLng.lat), lng:Number(latLng.lng)}

    if (map && circle) {
      const placesService = new window.google.maps.places.PlacesService(map);
      //   const center = circle.getCenter();
      //   const radius = circle.getRadius();

      const request = {
        location: center,
        radius: radius,
        query: ["school", "college", "vidyalaya"],
      };

      placesService.textSearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const schoolsWithDistances = results.map((result) => {
            const schoolLocation = result.geometry.location;
            const distanceFromCenter =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                center,
                schoolLocation
              );
            return {
              ...result,
              distanceFromCenter,
            };
          }).filter((result) => result.distanceFromCenter <= radius);
          schoolsWithDistances.sort((a, b) => {
            return a.distanceFromCenter - b.distanceFromCenter;
          });
          setSchools(schoolsWithDistances);
          setSchoolCount(schoolsWithDistances.length);
        }
      });
    }
  }, [latLng.lat, latLng.lng, map, circle]);

  const handleDelete = (id) => {
    setSchools(schools.filter((s) => s.place_id !== id));
    setSchoolCount(schoolCount-1)
  };

  const tableRows = schools.map((school) => {
    return (
      <tr key={school.place_id}>
        <td>{school.name}</td>
        <td>{Math.round(school.distanceFromCenter)} meters</td>
        <td>
          <MdDelete
            className="delete-button"
            onClick={() => handleDelete(school.place_id)}
          />
        </td>
      </tr>
    );
  });

  const markers = schools.map((school) => {
    return (
      <Marker
        key={school.place_id}
        position={{
          lat: school.geometry.location.lat(),
          lng: school.geometry.location.lng(),
        }}
        title={school.name}
        onClick={() => setSelectedSchool(school)}
      >
        {selectedSchool && selectedSchool.place_id === school.place_id && (
          <InfoWindow
            position={{
              lat: selectedSchool.geometry.location.lat(),
              lng: selectedSchool.geometry.location.lng(),
            }}
            onCloseClick={() => setSelectedSchool(null)}
          >
            <div>
              <h4>{selectedSchool.name}</h4>
              <p>{selectedSchool.formatted_address}</p>
              <p>Ratings: {selectedSchool.rating}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  });

  return isLoaded ? (
    <div className="school-detailes-wrapper">
      <GoogleMap
        mapContainerClassName="map-wrapper"
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Circle
          center={center}
          radius={radius}
          onLoad={onCircleLoad}
          options={{
            strokeColor: "#ff0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#ff0000",
            fillOpacity: 0.35,
          }}
        />
        <Marker position={{lat:center.lat, lng:center.lng}} icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
        {markers}
      </GoogleMap>
      <div className="selected-count">
        {schoolCount} schools selected
      </div>
      {(center.lat=== 6.927079 && center.lng=== 79.861244) ? (
      <div className ="warning-class">
          You have not set the home location. Demostration is running 
      </div>
      ):null}
      <div className="school-details-table">
        <table>
          <thead>
            <tr>
              <th>School name</th>
              <th>Distance from home</th>
              <th>Select school</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SchoolFinder;
