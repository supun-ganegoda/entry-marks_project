import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./SchoolFinder.css";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { useSelectedSchools } from "./context/SelectedSchoolsContext";
import { useUpdateSchoolCount } from "./context/SchoolCountContext";
import { loadGoogleMapsApi } from "./GoogleMapsLoader";
import { useLatLng } from "./context/LocationContext";

const SchoolLocator = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const url = process.env.REACT_APP_SERVER_URL;
  const googleMapRef = useRef(null);
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); //ensure that the map is loaded
  var selection; //having selected schools with lat, lng
  let distances; //having distances calculated from the home location
  let filteredSchools;
  const [center] = useState({ lat: 6.053519, lng: 80.220978 });
  const homeLatLng = useLatLng();
  //console.log(homeLatLng);

  const [zoom, setZoom] = useState(14);
  const schoolCount = useUpdateSchoolCount();
  let tempSchoolCount = [];
  const circleColors = ["#ff0000", "#32a852", "#f5ef3d", "#3dd6f5"];
  const markerColors = ["blue", "red", "purple", "ltblue"];
  const selectedSchools = useSelectedSchools();

  let allDistances;
  const [circles, setCircles] = useState();
  const [tableRows, setTableRows] = useState();
  const [homeLat] = useState(localStorage.getItem("lat"));
  const [homeLng] = useState(localStorage.getItem("lng"));
  const [markers, setMarkers] = useState([]);
  const [selectedSchoolMarkers, setSelectedSchoolMarkers] = useState([]);

  const loadAllSchools = async () => {
    try {
      const response = await fetch(`${url}schools/allschools`);
      const childDetails = await axios.get(`${url}get-applicant-details`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const resData = childDetails.data[0];
      const data = await response.json();
      const sex = resData.gender;
      let gender = "";
      if (localStorage.getItem("gender") === "male" || sex === "male") {
        gender = "BOY";
      }
      if (localStorage.getItem("gender") === "female" || sex === "female") {
        gender = "GIRL";
      }
      // load schools according to the gender
      const filteredData = data.filter(
        (item) => item.Category === gender || item.Category === "mix"
      );
      const markersData = filteredData.map((school, index) => {
        return {
          id: index,
          lat: parseFloat(school.Lat),
          lng: parseFloat(school.Lng),
        };
      });
      setMarkers(markersData);
      return filteredData;
      // console.log(filteredData);
    } catch (e) {
      console.log("Fail to load all schools from database");
    }
  };

  const loadSelectedSchools = async () => {
    const tempSchools = Object.values(selectedSchools);
    //empSchools.pop();
    //console.log(tempSchools);
    filteredSchools = await loadAllSchools();

    const extractedData = [];
    // Iterate through tempSchool names
    tempSchools.forEach((tempName) => {
      // Find the matching school in filteredSchools
      const matchingSchool = filteredSchools.find(
        (filteredSchool) => filteredSchool.Name.trim() === tempName.trim()
      );
      // If a matching school is found, extract and push the data
      if (matchingSchool) {
        const { Name, Lat, Lng, Category } = matchingSchool;
        extractedData.push({ Name, Lat, Lng, Category });
      }
    });
    const markersData = extractedData.map((school, index) => {
      return {
        id: index,
        lat: parseFloat(school.Lat),
        lng: parseFloat(school.Lng),
      };
    });
    setSelectedSchoolMarkers(markersData);
    console.log(markersData);
    return extractedData;
  };

  const generateTable = () => {
    if (selection.length === 0) {
      return null;
    } else {
      return selection.map((school, key) => {
        return (
          <tr key={key}>
            <td>
              <td>
                <img
                  src={`https://maps.google.com/mapfiles/ms/icons/${markerColors[key]}-dot.png`}
                  alt="Marker Icon"
                />
              </td>
            </td>
            <td>{school.Name}</td>
            <td>{school.Category.toLowerCase()}</td>
            <td>{Math.round(distances[key] / 1000.0, 2)} km</td>
            <td>
              <button
                className="show-btn"
                onClick={(e) => setCircles(handleDrawAndCalc(key))}
              >
                Show
              </button>
            </td>
            <td>{setSchoolCount(key)}</td>
            {/* <td>
              <button onClick={() => captureAndSaveScreenshot("school1")}>
                Capture
              </button>
            </td> */}
          </tr>
        );
      });
    }
  };

  const setSchoolCount = (key) => {
    let count = 0;
    count = allDistances.filter((distance) => distances[key] > distance).length;
    schoolCount((sc) => [...sc, count]);
    tempSchoolCount.push(count);
    //console.log(count);
    return count;
  };

  useEffect(() => {
    loadGoogleMapsApi(apiKey)
      .then(() => {
        setIsLoaded(true);
        // Now you can use the Google Maps API as needed
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  useEffect(() => {
    return schoolCount(tempSchoolCount);
  }, []);

  const panToLatLng = (lat, lng) => {
    // Check if the GoogleMap component is available
    if (googleMapRef.current) {
      // Access the panTo method and use it
      googleMapRef.current.panTo({ lat, lng });
    }
  };

  const handleDrawAndCalc = (key) => {
    panToLatLng(parseFloat(homeLat), parseFloat(homeLng));
    if (distances[key] > 20000) setZoom(10);
    return (
      <Circle
        key={key}
        center={{ lat: parseFloat(homeLat), lng: parseFloat(homeLng) }}
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

  const onLoadMap = async (map) => {
    googleMapRef.current = map;
    selection = await loadSelectedSchools();
    //setSelectedSchoolMarkers(selection);
    console.log(selection);
    distances = calcDistances(selection);
    allDistances = calcDistances(filteredSchools);
    //console.log(distances);
    setTableRows(generateTable());
    //console.log(distances);
  };

  const calcDistances = (s) => {
    const tempDistances = [];
    if (homeLat !== null && homeLng !== null) {
      s.forEach((school) => {
        const distance =
          window.google.maps.geometry.spherical.computeDistanceBetween(
            {
              lat: parseFloat(school.Lat),
              lng: parseFloat(school.Lng),
            },
            {
              lat: parseFloat(homeLat),
              lng: parseFloat(homeLng),
            }
          );
        //console.log(distance);
        tempDistances.push(distance);
      });
    }
    return tempDistances;
  };

  return (
    <>
      <div className="school-detailes-wrapper" ref={mapRef}>
        {isLoaded ? (
          <GoogleMap
            mapContainerClassName="map-wrapper"
            onLoad={onLoadMap}
            center={center}
            panTo={{ lat: parseFloat(homeLat), lng: parseFloat(homeLng) }}
            zoom={zoom}
          >
            {homeLat === "" && homeLng === "" ? (
              <div className="warning-class">
                You have not set the home location. Demostration is running
              </div>
            ) : (
              <Marker
                key={"home"}
                position={{
                  lat: parseFloat(homeLat),
                  lng: parseFloat(homeLng),
                }}
              />
            )}

            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
                icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}
              />
            ))}

            {selectedSchoolMarkers.map((marker, i) => (
              <Marker
                key={marker.id}
                position={{
                  lat: marker.lat,
                  lng: marker.lng,
                }}
                icon={`http://maps.google.com/mapfiles/ms/icons/${markerColors[i]}-dot.png`}
              />
            ))}

            {circles}
          </GoogleMap>
        ) : (
          <p>Google maps is loading... </p>
        )}

        <div className="school-details-table">
          {tableRows ? (
            <table>
              <thead>
                <tr>
                  <th>Legend</th>
                  <th>School name</th>
                  <th>School type</th>
                  <th>Distance from home</th>
                  <th>Show radius</th>
                  <th>No of Schools within the radius</th>
                  {/* <th>Capture</th> */}
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
