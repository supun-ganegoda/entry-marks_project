import {useState, useCallback, memo} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './Maps.css'

const center = {
  lat: 6.927079,
  lng: 79.861244
};

const GMap = ({handleMapClose, setLatLong}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAf9lx0qQs0BZiIhGLz8LsIX1ypDYyJ6go"
  })

  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(12)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onMapClick = useCallback((event) => {
    setLat(event.latLng.lat());
    setLng(event.latLng.lng());
    
    if (marker) {
      marker.setPosition(event.latLng);
      
    } else {
      setMarker(new window.google.maps.Marker({
        position: event.latLng,
        map: map,
      }));
    }
    if(lat && lng){
      setLatLong(lat.toFixed(4)+", "+lng.toFixed(4))
    }
  }, [marker, map,lat,lng,setLatLong]);
  
  

    return isLoaded ? (
      <GoogleMap
        mapContainerClassName='map-container'
        zoom={5}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
        <AiOutlineCloseCircle className="map-close-btn" onClick={handleMapClose}/>
      </GoogleMap>
      
  ) : <></>
}

export default memo(GMap)
