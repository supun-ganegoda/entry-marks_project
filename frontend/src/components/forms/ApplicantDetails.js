import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ApplicationDetails.css";
import GMap from "../GMap";
import Button from "@mui/material/Button";

const ApplicantDetails = (props) => {
  const { handleClick } = props;
  const url = process.env.REACT_APP_SERVER_URL;

  const [apFullName, setapFullName] = useState("");
  const [apInitials, setapInitials] = useState("");
  const [apNIC, setapNIC] = useState("");
  const [yesChecked1, setYesChecked1] = useState(false);
  const [noChecked1, setNoChecked1] = useState(false);
  const [apReligion, setapReligion] = useState("");
  const [apAddressLine1, setapAddressLine1] = useState("");
  const [apAddressLine2, setapAddressLine2] = useState("");
  const [apAddressLine3, setapAddressLine3] = useState("");
  const [apLatLng, setapLatLng] = useState("");
  const [apTeleNumber, setapTeleNumber] = useState("");
  const [apDistrict, setapDistrict] = useState("");
  const [apDivisionalSecretariat, setapDivisionalSecretariat] = useState("");
  const [apGramanildariDivision, setapGramanildariDivision] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  const [spFullName, setspFullName] = useState("");
  const [spInitials, setspInitials] = useState("");
  const [spNIC, setspNIC] = useState("");
  const [yesChecked2, setYesChecked2] = useState(false);
  const [noChecked2, setNoChecked2] = useState(false);
  const [spReligion, setspReligion] = useState("");
  const [spAddress, setspAddress] = useState("");
  const [spTeleNumber, setspTeleNumber] = useState("");
  const [spDivisionalSecretariat, setspDivisionalSecretariat] = useState("");
  const [spDistrict, setspDistrict] = useState("");
  const [spGramanildariDivision, setspGramanildariDivision] = useState("");

  useEffect(() => {
    loadApplicantDetails();
  }, []);

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

  const loadApplicantDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const applicantDetails = await axios.get(`${url}load-applicant-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const dataResponse = applicantDetails.data[0];
      setapFullName(dataResponse.apFullName);
      setapInitials(dataResponse.apInitials);
      setapNIC(dataResponse.apNIC);
      setYesChecked1(dataResponse.apSriLankan === "yes" ? true : false);
      setapReligion(dataResponse.apReligion);
      setapAddressLine1(dataResponse.apAddressLine1);
      setapAddressLine2(dataResponse.apAddressLine2);
      setapAddressLine3(dataResponse.apAddressLine3);
      setapLatLng(dataResponse.apLatLng);
      setapTeleNumber(dataResponse.apTeleNumber);
      setapDistrict(dataResponse.apDistrict);
      setapDivisionalSecretariat(dataResponse.apDivisionalSecretariat);
      setapGramanildariDivision(dataResponse.apGramanildariDivision);

      setspFullName(dataResponse.spFullName);
      setspInitials(dataResponse.spInitials);
      setspNIC(dataResponse.spNIC);
      setYesChecked2(dataResponse.spSriLankan === "yes" ? true : false);
      setspReligion(dataResponse.spReligion);
      setspAddress(dataResponse.spAddress);
      setspTeleNumber(dataResponse.spTeleNumber);
      setspDistrict(dataResponse.spDistrict);
      setspDivisionalSecretariat(dataResponse.spDivisionalSecretariat);
      setspGramanildariDivision(dataResponse.spGramanildariDivision);
    } catch (error) {
      console.error("Error loading applicant details:", error);
    }
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    let apSriLankan = "";
    yesChecked1 ? (apSriLankan = "yes") : (apSriLankan = "no");
    let spSriLankan = "";
    yesChecked2 ? (spSriLankan = "yes") : (spSriLankan = "no");

    const applicantDetailsData = {
      apFullName,
      apInitials,
      apNIC,
      apSriLankan,
      apReligion,
      apAddressLine1,
      apAddressLine2,
      apAddressLine3,
      apLatLng,
      apTeleNumber,
      apDistrict,
      apDivisionalSecretariat,
      apGramanildariDivision,
      spFullName,
      spInitials,
      spNIC,
      spSriLankan,
      spReligion,
      spAddress,
      spTeleNumber,
      spDistrict,
      spDivisionalSecretariat,
      spGramanildariDivision,
    };
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${url}applicant-details`,
        applicantDetailsData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data); // Handle success response
      handleClick();
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Applicant Details</legend>
            <div className="label-wrapper">
              <label className="label-form">Name in full: </label>
              <input
                type="text"
                id="apFullName"
                value={apFullName}
                onChange={(e) => setapFullName(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Name with initials: </label>
              <input
                type="text"
                id="apInitials"
                value={apInitials}
                onChange={(e) => setapInitials(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">NIC no: </label>
              <input
                type="text"
                id="apNIC"
                value={apNIC}
                onChange={(e) => setapNIC(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Are you Sri Lankan: </label>
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
              <label className="label-form">Religion: </label>
              <input
                type="text"
                id="apReligion"
                value={apReligion}
                onChange={(e) => setapReligion(e.target.value)}
                required
              />
            </div>

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

            <div className="label-wrapper">
              <label className="label-form">Telephone number: </label>
              <input
                type="text"
                id="apTeleNumber"
                value={apTeleNumber}
                onChange={(e) => setapTeleNumber(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Residential district: </label>
              <input
                type="text"
                id="apDistrict"
                value={apDistrict}
                onChange={(e) => setapDistrict(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Divisional secratariat: </label>
              <input
                type="text"
                id="apDivisionalSecretariat"
                value={apDivisionalSecretariat}
                onChange={(e) => setapDivisionalSecretariat(e.target.value)}
                required
              />
              <div className="form-help">
                <Link to="http://www.dmc.gov.lk/images/pdfs/DIVISIONAL-SECRETARIAT-contact-No.pdf">
                  Click here to find the divisional secretariat
                </Link>
              </div>
            </div>

            <div className="label-wrapper">
              <label className="label-form">
                Grama-Niladari division & number:{" "}
              </label>
              <input
                type="text"
                id="apGramanildariDivision"
                value={apGramanildariDivision}
                onChange={(e) => setapGramanildariDivision(e.target.value)}
                required
              />
              <div className="form-help" onClick={handleHelpClick}>
                <u>Click here to find the Grama-Niladari details</u>
              </div>
              {showIframe && (
                <div className="iframe-container">
                  <iframe
                    title="Find Grama-Niladarai Details"
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

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Details of Spouse</legend>
            <div className="label-wrapper">
              <label className="label-form">Name in full: </label>
              <input
                type="text"
                id="spFullName"
                value={spFullName}
                onChange={(e) => setspFullName(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Name with initials: </label>
              <input
                type="text"
                id="spInitials"
                value={spInitials}
                onChange={(e) => setspInitials(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">NIC no: </label>
              <input
                type="text"
                id="spNIC"
                value={spNIC}
                onChange={(e) => setspNIC(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Are you Sri Lankan: </label>
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
              <label className="label-form">Religion: </label>
              <input
                type="text"
                id="spReligion"
                value={spReligion}
                onChange={(e) => setspReligion(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Permanant Address: </label>
              <input
                type="text"
                id="spAddress"
                value={spAddress}
                onChange={(e) => setspAddress(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Telephone number: </label>
              <input
                type="text"
                id="spTeleNumber"
                value={spTeleNumber}
                onChange={(e) => setspTeleNumber(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Residential district: </label>
              <input
                type="text"
                id="spDivisionalSecretariat"
                value={spDistrict}
                onChange={(e) => setspDistrict(e.target.value)}
                required
              />
            </div>

            <div className="label-wrapper">
              <label className="label-form">Divisional secratariat: </label>
              <input
                type="text"
                id="spDistrict"
                value={spDivisionalSecretariat}
                onChange={(e) => setspDivisionalSecretariat(e.target.value)}
                required
              />
              <div className="form-help">
                <Link to="http://www.dmc.gov.lk/images/pdfs/DIVISIONAL-SECRETARIAT-contact-No.pdf">
                  Click here to find the divisional secretariat
                </Link>
              </div>
            </div>

            <div className="label-wrapper">
              <label className="label-form">
                Grama-Niladari division & number:{" "}
              </label>
              <input
                type="text"
                id="spGramanildariDivision"
                value={spGramanildariDivision}
                onChange={(e) => setspGramanildariDivision(e.target.value)}
                required
              />
              <div className="form-help" onClick={handleHelpClick}>
                <u>Click here to find the Grama-Niladari details</u>
              </div>
              {showIframe && (
                <div className="iframe-container">
                  <iframe
                    title="Find Grama-Niladarai Details"
                    src="https://gic.gov.lk/gic/index.php/component/findnearest/"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                  <button onClick={() => setShowIframe(false)}>Close</button>
                </div>
              )}
            </div>
          </fieldset>
          <div className="save-btn" onClick={(e) => handleSubmit()}>
            <Button variant="outlined">SAVE & CONTINUE</Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ApplicantDetails;
