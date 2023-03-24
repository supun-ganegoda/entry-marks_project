import { useState } from "react";
import { Link } from "react-router-dom";
import './ApplicationDetails.css'
import Map from "./Maps";

const ApplicantDetails = () => {
  const [fullname1, setFullName1] = useState("")
  const [initials1, setInitials1] = useState("")
  const [nic1, setNic1] = useState("")
  const [yesChecked1, setYesChecked1] = useState(false);
  const [noChecked1, setNoChecked1] = useState(false);
  const [religion1, setReligion1] = useState("")
  const [address1, setAddress1] = useState("")
  const [latlong, setLatlong] = useState("")
  const [tel1, setTel1] = useState("")
  const [district1, setDistrict1] = useState("")
  const [divisional1, setDivisional1] = useState("")
  const [grama1, setGrama1] = useState("")
  const [showIframe, setShowIframe] = useState(false);
  const [mapDisplay,setMapDisplay]=useState(false)

  const [fullname2, setFullName2] = useState("")
  const [initials2, setInitials2] = useState("")
  const [nic2, setNic2] = useState("")
  const [yesChecked2, setYesChecked2] = useState(false);
  const [noChecked2, setNoChecked2] = useState(false);
  const [religion2, setReligion2] = useState("")
  const [address2, setAddress2] = useState("")
  const [tel2, setTel2] = useState("")
  const [district2, setDistrict2] = useState("")
  const [divisional2, setDivisional2] = useState("")
  const [grama2, setGrama2] = useState("")

  const handleMapDisplay = ()=>{
    setMapDisplay(true)
  }

  const handleMapClose =() =>{
    setMapDisplay(false)
  }

  const handleHelpClick = () => {
    setShowIframe(true);
  };

  function handleYes1CheckboxChange() {
    setYesChecked1(true);
    setNoChecked1(false);
  }

  function handleNo1CheckboxChange() {
    setNoChecked1(true);
    setYesChecked1(false);
  }

  function handleYes2CheckboxChange() {
    setYesChecked2(true);
    setNoChecked2(false);
  }

  function handleNo2CheckboxChange() {
    setNoChecked2(true);
    setYesChecked2(false);
  }

  return (
    <>
      <div className="form-container">
        <form>
          <fieldset>
          <legend>Applicant Details</legend>
            <div className="label-wrapper">
              <label className="form-label">Name in full: </label>
              <input
                type="text"
                id="fullname1"
                value={fullname1}
                onChange={(e) => setFullName1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Name with initials: </label>
              <input
                type="text"
                id="initials1"
                value={initials1}
                onChange={(e) => setInitials1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">NIC no: </label>
              <input
                type="text"
                id="nic1"
                value={nic1}
                onChange={(e) => setNic1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Are you Sri Lankan: </label>
              <label className="form-race-label">
                <input
                  className="form-race-checkbox"
                  type="checkbox"
                  checked={yesChecked1}
                  onChange={handleYes1CheckboxChange}
                />
                Yes
              </label>
              <label className="form-race-label">
                <input
                  className="form-race-checkbox"
                  type="checkbox"
                  checked={noChecked1}
                  onChange={handleNo1CheckboxChange}
                />
                No
              </label>
            </div>

            <div className="label-wrapper">
              <label className="form-label">Religion: </label>
              <input
                type="text"
                id="religion1"
                value={religion1}
                onChange={(e) => setReligion1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Permanant Address: </label>
              <input
                type="text"
                id="address1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Latitude and longitude: </label>
              <input
                type="text"
                id="latlong"
                value={latlong}
                onChange={(e) => setLatlong(e.target.value)}
                required
              />
              <button className="form-map-button" onClick={handleMapDisplay}>Find</button>
              {mapDisplay&&<Map handleMapClose={handleMapClose} setLatLong={setLatlong}/>}
            </div>

            <div className="label-wrapper">
              <label className="form-label">Telephone number: </label>
              <input
                type="text"
                id="tel1"
                value={tel1}
                onChange={(e) => setTel1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Residential district: </label>
              <input
                type="text"
                id="district1"
                value={district1}
                onChange={(e) => setDistrict1(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Divisional secratariat: </label>
              <input
                type="text"
                id="divisional1"
                value={divisional1}
                onChange={(e) => setDivisional1(e.target.value)}
                required
              />
              <div className="form-help">
                <Link to ='http://www.dmc.gov.lk/images/pdfs/DIVISIONAL-SECRETARIAT-contact-No.pdf'>
                  Click here to find the divisional secretariat
                </Link>
              </div>
            </div>

            <div className="label-wrapper">
              <label className="form-label">Grama-Niladari division & number: </label>
              <input
                type="text"
                id="grama1"
                value={grama1}
                onChange={(e) => setGrama1(e.target.value)}
                required
              />
              <div className="form-help" onClick={handleHelpClick}>
                <u>Click here to find the Grama-Niladari details</u>
              </div>
              {showIframe && (
              <div className="iframe-container">
              <iframe title="Find Grama-Niladarai Details"
              src="https://gic.gov.lk/gic/index.php/component/findnearest/" 
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              <button onClick={() => setShowIframe(false)}>Close</button>
              </div>
              )}
            </div>
          </fieldset>
        </form>
      </div>


      <div className="form-container2">
        <form>
          <fieldset>
          <legend>Details of Spouse</legend>
            <div className="label-wrapper">
              <label className="form-label">Name in full: </label>
              <input
                type="text"
                id="fullname2"
                value={fullname2}
                onChange={(e) => setFullName2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Name with initials: </label>
              <input
                type="text"
                id="initials2"
                value={initials2}
                onChange={(e) => setInitials2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">NIC no: </label>
              <input
                type="text"
                id="nic2"
                value={nic2}
                onChange={(e) => setNic2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Are you Sri Lankan: </label>
              <label className="form-race-label">
                <input
                  className="form-race-checkbox"
                  type="checkbox"
                  checked={yesChecked2}
                  onChange={handleYes2CheckboxChange}
                />
                Yes
              </label>
              <label className="form-race-label">
                <input
                  className="form-race-checkbox"
                  type="checkbox"
                  checked={noChecked2}
                  onChange={handleNo2CheckboxChange}
                />
                No
              </label>
            </div>

            <div className="label-wrapper">
              <label className="form-label">Religion: </label>
              <input
                type="text"
                id="religion2"
                value={religion2}
                onChange={(e) => setReligion2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Permanant Address: </label>
              <input
                type="text"
                id="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Telephone number: </label>
              <input
                type="text"
                id="tel2"
                value={tel2}
                onChange={(e) => setTel2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Residential district: </label>
              <input
                type="text"
                id="district2"
                value={district2}
                onChange={(e) => setDistrict2(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="form-label">Divisional secratariat: </label>
              <input
                type="text"
                id="divisional2"
                value={divisional2}
                onChange={(e) => setDivisional2(e.target.value)}
                required
              />
              <div className="form-help">
                <Link to ='http://www.dmc.gov.lk/images/pdfs/DIVISIONAL-SECRETARIAT-contact-No.pdf'>
                  Click here to find the divisional secretariat
                </Link>
              </div>
            </div>

            <div className="label-wrapper">
              <label className="form-label">Grama-Niladari division & number: </label>
              <input
                type="text"
                id="grama2"
                value={grama2}
                onChange={(e) => setGrama2(e.target.value)}
                required
              />
              <div className="form-help" onClick={handleHelpClick}>
                <u>Click here to find the Grama-Niladari details</u>
              </div>
              {showIframe && (
              <div className="iframe-container">
              <iframe title="Find Grama-Niladarai Details"
              src="https://gic.gov.lk/gic/index.php/component/findnearest/" 
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              <button onClick={() => setShowIframe(false)}>Close</button>
              </div>
              )}
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default ApplicantDetails;
