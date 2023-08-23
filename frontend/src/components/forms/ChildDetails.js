import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ChildDetails.css";
import GMap from "../GMap";
import { useLatLng } from "../context/LocationContext";


const ChildDetails = () => {

  const latLng = useLatLng();

  const [newlatlong, setNewLatlong] = useState(latLng.lat + ", " + latLng.lng);
  const [tel1, setTel1] = useState("");

  const [mapDisplay, setMapDisplay] = useState(false);


  useEffect(() => {
    setNewLatlong(latLng.lat + ", " + latLng.lng);
  }, [latLng]);

  const handleMapDisplay = () => {
    setMapDisplay(true);
  };

  const handleMapClose = () => {
    setMapDisplay(false);
  };


  return (
    <>
      <div className="form-container">
        <form>
          <fieldset>
            <legend>Applicant Details</legend>
            

            <div className="label-wrapper">
              <label className="label-form">Latitude and longitude: </label>
              <input
                type="text"
                id="latlong"
                value={newlatlong}
                readOnly={true}
                //onChange={(e) => setNewLatlong(e.target.value)}
                required
              />
              <button
                className="form-map-button"
                onClick={handleMapDisplay}
                title="Click your location to set coordinates"
              >
                Find
              </button>
              {/* {mapDisplay&&<Map handleMapClose={handleMapClose} setLatLong={setLatlong}/>} */}
            </div>

            <div className="label-wrapper">
              <label className="label-form">Telephone number: </label>
              <input
                type="text"
                id="tel1"
                value={tel1}
                onChange={(e) => setTel1(e.target.value)}
                required
              />
            </div>
          </fieldset>
        </form>
      </div>

      {mapDisplay && <GMap handleMapClose={handleMapClose} />}
    </>
  );
};
export default ChildDetails;
