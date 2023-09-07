import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ChildDetails.css";
import GMap from "../GMap";
import Button from "@mui/material/Button";

const ChildDetails = (props) => {
  const { handleClick } = props;
  const url = process.env.REACT_APP_SERVER_URL;

  const [apAddressLine1, setapAddressLine1] = useState("");
  const [apAddressLine2, setapAddressLine2] = useState("");
  const [apAddressLine3, setapAddressLine3] = useState("");
  const [apLatLng, setapLatLng] = useState("");

  const [showIframe, setShowIframe] = useState(false);


  useEffect(() => {
  
  }, []);

  const handleHelpClick = () => {
    setShowIframe(true);
  };

  

  return (
    <>
      <div className="form-container">
        <form >
          <fieldset>
            <legend>Location Details</legend>

            <div className="label-wrapper">
              <label className="label-form">Permanant Address: </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  flexGrow: "1",
                }}
              >
                <input
                  type="text"
                  id="apAddressLine1"
                  placeholder="Address line 1"
                  value={apAddressLine1}
                  style={{ width: "100%" }}
                  onChange={(e) => setapAddressLine1(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="apAddressLine2"
                  placeholder="Address line 2"
                  value={apAddressLine2}
                  style={{ width: "100%" }}
                  onChange={(e) => setapAddressLine2(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="apAddressLine3"
                  placeholder="Address line 3"
                  value={apAddressLine3}
                  style={{ width: "100%" }}
                  onChange={(e) => setapAddressLine3(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="label-wrapper">
              <label className="label-form">Latitude and longitude: </label>
              <input
                type="text"
                id="latlong"
                value={apLatLng}
                readOnly={true}
                onChange={(e) => setapLatLng(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <GMap setapLatLng={setapLatLng} city={apAddressLine3} />
            </div>


          </fieldset>
        </form>
      </div>

    </>
  );
};
export default ChildDetails;
