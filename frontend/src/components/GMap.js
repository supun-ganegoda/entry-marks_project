import { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Maps.css";
import { useUpdateLatLng } from "./context/LocationContext";

const center = {
  lat: 6.927079,
  lng: 79.861244,
};
const apiKey = "AIzaSyAf9lx0qQs0BZiIhGLz8LsIX1ypDYyJ6go";

const GMap = ({ handleMapClose }) => {
  const updateLatLng = useUpdateLatLng();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [lat, setLat] = useState(6.927079);
  const [lng, setLng] = useState(79.861244);

  // const onLoad = useCallback(function callback(map) {
  //   // const bounds = new window.google.maps.LatLngBounds(center);
  //   // map.fitBounds(bounds);
  //   map.setZoom(12);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  const onLoad = (map) => {
    setMap(map);
    setMarker(
      new window.google.maps.Marker({
        position: center,
        map: map,
      })
    );
  };

  const onUnmount = () => {
    setMap(null);
    //updateLatLng({ lat: lat, lng: lng });
  };

  const onMapClick = (event) => {
   

    if (marker) {
      marker.setPosition(event.latLng);
    } else {
    setMarker(
        new window.google.maps.Marker({
          position: event.latLng,
          map: map,
        })
      );
    }
    setLat(event.latLng.lat());
    setLng(event.latLng.lng());
    if (lat && lng) {
      updateLatLng({ lat: lat.toFixed(4), lng: lng.toFixed(4) });
      //setNewLatLong(`${lat.toFixed(4)}, ${lng.toFixed(4)}`);
      //setLatLong()
    }
    
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="map-container"
      zoom={12}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onMapClick}
    >
      <AiOutlineCloseCircle
        className="map-close-btn"
        onClick={handleMapClose}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GMap;
