import { useEffect, useState } from "react";
import "./SchoolFinder.css";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { useLatLng } from "./context/LocationContext";

const SchoolLocator = () => {
  const home = useLatLng();
  const [schools, setSchools] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const getAllSchoolDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/schools/allschools"
        );
        const data = await response.json();
        // console.log(data);
        setSchools(data);
        const markersData = data.map((school, index) => {
          return {
            id: index,
            lat: parseFloat(school.Lat),
            lng: parseFloat(school.Lng),
          };
        });
        setMarkers(markersData);
        console.log(markersData);
      } catch (error) {
        console.log("Error fetching suggestions:", error);
      }
    };
    getAllSchoolDetails();
  }, []);

  const mapOptions = {
    center: { lat: 6.053519, lng: 80.220978 }, // Set the initial center of the map
    zoom: 12, // Set the initial zoom level of the map
  };

  console.log(home);
  return (
    <>
      <div className="school-detailes-wrapper">
        <LoadScript googleMapsApiKey="AIzaSyBGNDiPaU1jWUUFF9xiTwCNqNpa2Zd1ngI">
          <GoogleMap mapContainerClassName="map-wrapper" options={mapOptions}>
            {home.lat === "" && home.lng === "" ? (
              <div className="warning-class">
                You have not set the home location. Demostration is running
              </div>
            ) : (
              <Marker
                key={home}
                position={{
                  lat: parseFloat(home.lat),
                  lng: parseFloat(home.lng),
                }}
                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              />
            )}

            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default SchoolLocator;
