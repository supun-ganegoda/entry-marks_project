import { useEffect, useState } from "react";
import "./SchoolFinder.css";
import { GoogleMap, Marker, LoadScript, Circle } from "@react-google-maps/api";
import { useLatLng } from "./context/LocationContext";
import { useSelectedSchools } from "./context/SelectedSchoolsContext";
import { useUpdateSchoolCount } from "./context/SchoolCountContext";

const SchoolLocator = () => {
  const schoolCount = useUpdateSchoolCount();
  let tempSchoolCount = [];
  const circleColors = ["#ff0000", "#32a852", "#f5ef3d", "#3dd6f5"];
  const selectedSchools = useSelectedSchools();
  let selectedSchoolDetails;
  let distances;
  let allDistances;
  const [circles, setCircles] = useState();
  const [tableRows, setTableRows] = useState();
  const home = useLatLng();
  const [markers, setMarkers] = useState([]);

  const generateTable = (schools) => {
    if (selectedSchools.length === 0) {
      return null;
    } else {
      return selectedSchools.map((school, key) => {
        return (
          <tr key={key}>
            <td>{school}</td>
            <td>{schools[key].Type}</td>
            <td>{Math.round(distances[key])} meters</td>
            <td>
              <button
                className="show-btn"
                onClick={(e) => setCircles(handleDrawAndCalc(key))}
              >
                Show
              </button>
            </td>
            <td>{setSchoolCount(key)}</td>
          </tr>
        );
      });
    }
  };

  const setSchoolCount = (key) => {
    let count = 0;
    count = allDistances.filter((distance) => distances[key] > distance).length;
    //schoolCount((sc) => [...sc, count]);
    tempSchoolCount.push(count);
    console.log(count);
    return count;
  };

  useEffect(() => {
    return schoolCount(tempSchoolCount);
  }, []);

  const handleDrawAndCalc = (key) => {
    //console.log(allDistances);
    return (
      <Circle
        key={key}
        center={{ lat: parseFloat(home.lat), lng: parseFloat(home.lng) }}
        radius={distances[key]}
        //onLoad={onCircleLoad}
        options={{
          strokeColor: "#ff0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: circleColors[key],
          fillOpacity: 0.35,
        }}
      />
    );
  };

  const onLoadMap = () => {
    const getAllSchoolDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/schools/allschools"
        );
        const data = await response.json();
        // console.log(data);
        //setSchools(data);
        const markersData = data.map((school, index) => {
          return {
            id: index,
            lat: parseFloat(school.Lat),
            lng: parseFloat(school.Lng),
          };
        });
        setMarkers(markersData);
        if (selectedSchools.length !== 0) {
          selectedSchoolDetails = data.filter((school) =>
            selectedSchools.includes(school.Name)
          );
          distances = calcDistances(selectedSchoolDetails);
          allDistances = calcDistances(data);
          setTableRows(generateTable(data));
          //setCircles(drawCircles());
        }
        console.log(selectedSchoolDetails);
      } catch (error) {
        console.log("Error fetching suggestions:", error);
      }
    };

    getAllSchoolDetails();
  };

  const calcDistances = (selectedSchools) => {
    //console.log(selectedSchools);
    const tempDistances = [];
    if (home.lat !== "" && home.lng !== "") {
      selectedSchools.forEach((school) => {
        const distance =
          window.google.maps.geometry.spherical.computeDistanceBetween(
            {
              lat: parseFloat(school.Lat),
              lng: parseFloat(school.Lng),
            },
            {
              lat: parseFloat(home.lat),
              lng: parseFloat(home.lng),
            }
          );
        tempDistances.push(distance);
      });
    }
    // console.log(tempDistances);
    // distances = tempDistances;
    return tempDistances;
  };

  const mapOptions = {
    center: { lat: 6.053519, lng: 80.220978 }, // Set the initial center of the map
    zoom: 12, // Set the initial zoom level of the map
  };

  return (
    <>
      <div className="school-detailes-wrapper">
        <LoadScript
          googleMapsApiKey="AIzaSyDA22GGNjkZa1MuC3ChlVyacbqQP2S5MxM"
          libraries={["geometry"]}
          onLoad={onLoadMap}
        >
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
            {circles}
          </GoogleMap>
        </LoadScript>

        <div className="school-details-table">
          {tableRows ? (
            <table>
              <thead>
                <tr>
                  <th>School name</th>
                  <th>School type</th>
                  <th>Distance from home</th>
                  <th>Show radius</th>
                  <th>No of Schools within the radius</th>
                </tr>
              </thead>
              <tbody>{tableRows}</tbody>
            </table>
          ) : (
            <p>No schools are selected !</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SchoolLocator;
