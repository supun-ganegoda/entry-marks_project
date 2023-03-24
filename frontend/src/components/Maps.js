import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import './Maps.css'

function Map({handleMapClose, setLatLong}) {
    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const [latitude,setLatitude] = useState(null)
        const [longitude, setLongitude] = useState(null)
        
        const map = useMapEvents({
          click() {
            map.locate();
          },
          locationfound(e) {
            setLatitude(e.latitude)
            setLongitude(e.longitude)
            if(longitude&&latitude){
                alert("Latitude: "+latitude+" & Longitude: "+longitude)
                handleCoordinates(latitude, longitude);
            }
            setPosition(e.latlng);
          },
        });
      
        useEffect(() => {
          if (position) {
            map.flyTo(position, map.getZoom());
          }
        }, [position, map]);
      
        
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here Lat: {latitude} Long: {longitude}</Popup>
          </Marker>
        );
      }
      
      const handleCoordinates = (latitude,longitude)=>{
            setLatLong(latitude+", "+longitude)
      }
  return (
    <>
    <MapContainer
      center={[6.9271, 79.8622]}
      zoom={13}
      maxZoom={18}
      scrollWheelZoom={true}
      className="map-container"
    //   style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
      />

      <LocationMarker />
    </MapContainer>
    <AiOutlineCloseCircle className="map-close-btn" onClick={handleMapClose}/>
    </>
  );
}

export default Map;
