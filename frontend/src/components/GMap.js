import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Maps.css";
import { useUpdateLatLng } from "./context/LocationContext";

const center = {
  lat: 6.053519,
  lng: 80.220978,
};
const GMap = ({ handleMapClose }) => {
  const updateLatLng = useUpdateLatLng();

  const [markerPosition, setMarkerPosition] = useState(null);

  const onMapClick = (event) => {
    updateLatLng({
      lat: event.latLng.lat().toFixed(4),
      lng: event.latLng.lng().toFixed(4),
    });
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyBGNDiPaU1jWUUFF9xiTwCNqNpa2Zd1ngI">
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={12}
            onClick={onMapClick}
          >
            {markerPosition && <Marker position={markerPosition} />}
            <AiOutlineCloseCircle
              className="map-close-btn"
              onClick={handleMapClose}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default GMap;
