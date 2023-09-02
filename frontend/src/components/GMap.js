import { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useUpdateLatLng } from "./context/LocationContext";
import { loadGoogleMapsApi } from "./GoogleMapsLoader";
import "./Maps.css";

const GMap = ({ setapLatLng, city }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [isLoaded, setIsLoaded] = useState(false); //ensure that the map is loaded
  //console.log(apiKey);

  const [center, setCenter] = useState({ lat: 6.053519, lng: 80.220978 });
  const updateLatLng = useUpdateLatLng();

  const [markerPosition, setMarkerPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);

  const onLoad = (mapInstance) => {
    // The map is loaded, you can access it here
    setMap(mapInstance);
  };

  const sendLatLngToParent = (lat, lng) => {
    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
    setapLatLng(lat + ", " + lng);
    updateLatLng(lat + ", " + lng);
  };

  const onMapClick = (event) => {
    const lat = event.latLng.lat().toFixed(4);
    const lng = event.latLng.lng().toFixed(4);
    sendLatLngToParent(lat, lng);

    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
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
    if (city !== "" && city.length >= 5) {
      handleSearch();
    }
  }, [city]);

  const handleSearch = () => {
    // Use the Geocoding API to fetch the coordinates for the entered city name
    const checkGoogleMapsAvailability = () => {
      if (window.google && window.google.maps) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: city }, (results, status) => {
          if (status === "OK" && results[0]) {
            const location = results[0].geometry.location;
            if (
              typeof location.lat === "function" &&
              typeof location.lng === "function" &&
              isFinite(location.lat()) &&
              isFinite(location.lng())
            ) {
              const lat = location.lat();
              const lng = location.lng();
              setCenter({ lat, lng });
              setZoom(14); // Adjust the zoom level as needed
              map.panTo({ lat, lng });
            }
          } else {
            // Handle error if city name couldn't be resolved
            //console.log("City not found");
          }
        });
      } else {
        setTimeout(checkGoogleMapsAvailability, 100);
      }
    };
    checkGoogleMapsAvailability();
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: apiKey,
  //   libraries,
  // });

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center} // Define your map center
          zoom={zoom} // Set your desired zoom level
          onLoad={onLoad}
          onClick={onMapClick}
        >
          {/* Render markers or other map components as needed */}
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      ) : (
        <p>Loading...</p> // You can display a loading message or spinner here
      )}
    </>
  );
};

export default GMap;
