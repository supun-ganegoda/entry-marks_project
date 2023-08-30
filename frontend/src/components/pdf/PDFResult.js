import axios from "axios";
import "./PDFResult.css"; // Import the CSS file
import { useEffect, useState } from "react";
import { useNavbar } from "../context/NavbarContext";

const PDFResult = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const { setShowNavbar } = useNavbar();
  const [userObj, setUserObj] = useState({});
  const [parentObj, setParentObj] = useState({});
  const [maxMarks, setMaxMarks] = useState("");
  const [marksObj, setMarksObj] = useState({});
  const [electorialObj, setElectorialObj] = useState({});
  const [applicantDetailObj, setApplicantDetailObj] = useState({});
  const [formattedDate, setFormattedDate] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const generatePDF = async () => {
    try {
      const response = await axios.get(`${url}pdf/generatePDF`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const uri = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = uri;
      a.download = "Summary-Report.pdf";
      a.click();
      URL.revokeObjectURL(uri);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const getDate = () => {
    const today = new Date();
    const tempDate = ` ${
      today.getMonth() + 1
    }. ${today.getDate()}. ${today.getFullYear()}.`;
    setFormattedDate(tempDate);
    setUserName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("email"));
  };

  const loadData = async (e) => {
    try {
      const token = localStorage.getItem("token");
      //get user's credentials
      const userDetails = await axios.get(`${url}get-user-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //getting the child information
      const applicantDetails = await axios.get(`${url}get-applicant-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //get marks
      const marks = await axios.get(`${url}get-marks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //get parent information
      const parentInfo = await axios.get(`${url}load-applicant-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //get electorial information
      const electorialInfo = await axios.get(`${url}get-electorial-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // The marks object should be available in the response.data
      setApplicantDetailObj(applicantDetails.data[0]);
      setUserObj(userDetails.data);
      setParentObj(parentInfo.data[0]);
      setMarksObj(marks.data);
      setElectorialObj(electorialInfo.data[0]);

      // Now you can use the 'marks' object as needed
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const findMax = () => {
    const marksArr = Object.values(marksObj);
    marksArr.sort((a, b) => b - a);
    setMaxMarks(marksArr[0]);
  };

  useEffect(() => {
    findMax();
  }, [marksObj, maxMarks]);

  useEffect(() => {
    setShowNavbar(false); // Hide the Navbar when PDFResult is rendered
    getDate();
    loadData(); //load data from the database

    return () => {
      setShowNavbar(true); // Show the Navbar when leaving PDFResult
    };
  }, []);

  const ID = userObj.ID;
  const pastPupils = marksObj.pastPupils ? marksObj.pastPupils : "-";
  const proximity = marksObj.proximity ? marksObj.proximity : "-";
  const cousins = marksObj.cousins ? marksObj.cousins : "-";
  const staff = marksObj.staff ? marksObj.staff : "-";
  const officers = marksObj.officers ? marksObj.officers : "-";
  const forign = marksObj.forign ? marksObj.forign : "-";

  // Details of child
  const fullName = applicantDetailObj.fullName;
  const initials = applicantDetailObj.initials;
  const sex = applicantDetailObj.gender;
  const religion = applicantDetailObj.religion;
  const medium = applicantDetailObj.medium;
  const birth = applicantDetailObj.birth;

  // Details of applicant
  const fullName1 = parentObj.apFullName;
  const initials1 = parentObj.apInitials;
  const nic1 = parentObj.apNIC;
  const citizen1 = parentObj.apSriLankan;
  const religion1 = parentObj.apReligion;
  const address1 = parentObj.apAddressLine1;
  const address12 = parentObj.apAddressLine2;
  const address13 = parentObj.apAddressLine3;
  const newlatlong = parentObj.apLatLng;
  const tel1 = parentObj.apTeleNumber;
  const district1 = parentObj.apDistrict;
  const divisional1 = parentObj.apDivisionalSecretariat;
  const grama1 = parentObj.apGramanildariDivision;

  // Details of spouse
  const fullname2 = parentObj.spFullName;
  const initials2 = parentObj.spInitials;
  const nic2 = parentObj.spNIC;
  const citizen2 = parentObj.spSriLankan;
  const religion2 = parentObj.spReligion;
  const address2 = parentObj.spAddress;
  const tel2 = parentObj.spTeleNumber;
  const district2 = parentObj.spDistrict;
  const divisional2 = parentObj.spDivisionalSecretariat;
  const grama2 = parentObj.spGramanildariDivision;

  //const distances = "test";

  // Details on electorial list
  const year = electorialObj.year;
  const district = electorialObj.district;
  const division = electorialObj.division;
  const divisionNo = electorialObj.divisionNo;
  const pollingDivision = electorialObj.pollingDivision;
  const street = electorialObj.street;
  const houseHold = electorialObj.houseHold;
  const serial = electorialObj.serial;
  const electors = electorialObj.electors;

  return (
    <div className="invoice-box">
      <div className="nav-container">
        <button className="download-btn" onClick={(e) => generatePDF()}>
          Download
        </button>
      </div>
      <table cellPadding="0" cellSpacing="0" className="no-border-table">
        <tbody>
          <tr className="top">
            <td colSpan="2">
              <table className="no-border-table">
                <tbody>
                  <tr>
                    <td className="title">
                      <img
                        src="./images/SDDK.png"
                        alt="SDDK company"
                        style={{ width: "100%", maxWidth: "156px" }}
                      />
                    </td>
                    <td>
                      Date of Report:
                      {`${formattedDate}`}
                      <br />
                      Email: {`${email}`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="information">
            <td colSpan="2">
              <table className="no-border-table">
                <tbody>
                  <tr>
                    <td>User name: {`${userName}`}</td>
                    <td>Hash: {`${ID}`}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr className="heading">
            <td>Category</td>
            <td>Marks</td>
          </tr>
          <tr className="item">
            <td>Based on Proximity:</td>
            <td>{proximity}</td>
          </tr>
          <tr className="item">
            <td>Based on Past pupils:</td>
            <td>{pastPupils}</td>
          </tr>
          <tr className="item">
            <td>Based on Brothers and Sisters:</td>
            <td>{cousins}</td>
          </tr>
          <tr className="item">
            <td>Based on Staff members:</td>
            <td>{staff}</td>
          </tr>
          <tr className="item">
            <td>Based on officers and armed forces:</td>
            <td>{officers}</td>
          </tr>
          <tr className="item">
            <td>Based on forigen:</td>
            <td>{forign}</td>
          </tr>
        </tbody>
      </table>
      <br />

      <table cellPadding="0" cellSpacing="0" className="no-border-table">
        <tbody>
          <tr className="heading">
            <td>Details of Child</td>
            <td></td>
          </tr>
          <tr className="test-row">
            <td>Name in full:</td>
            <td>{fullName}</td>
          </tr>
          <tr className="test-row">
            <td>Name with initials:</td>
            <td>{initials}</td>
          </tr>
          <tr className="test-row">
            <td>Sex:</td>
            <td>{sex}</td>
          </tr>
          <tr className="test-row">
            <td>Religion:</td>
            <td>{religion}</td>
          </tr>
          <tr className="test-row">
            <td>Medium of learning:</td>
            <td>{medium}</td>
          </tr>
          <tr className="test-row">
            <td>Date of birth:</td>
            <td>{birth}</td>
          </tr>

          <tr className="heading">
            <td>Details of Applicant</td>
            <td></td>
          </tr>
          <tr className="test-row">
            <td>Name in full:</td>
            <td>{fullName1}</td>
          </tr>
          <tr className="test-row">
            <td>Name with initials:</td>
            <td>{initials1}</td>
          </tr>
          <tr className="test-row">
            <td>NIC no:</td>
            <td>{nic1}</td>
          </tr>
          <tr className="test-row">
            <td>Are you Sri Lankan:</td>
            <td>{citizen1}</td>
          </tr>
          <tr className="test-row">
            <td>Religion:</td>
            <td>{religion1}</td>
          </tr>
          <tr className="test-row">
            <td>Address line 1:</td>
            <td>{address1}</td>
          </tr>
          <tr className="test-row">
            <td>Address line 2:</td>
            <td>{address12}</td>
          </tr>
          <tr className="test-row">
            <td>Address line 3:</td>
            <td>{address13}</td>
          </tr>
          <tr className="test-row">
            <td>Latitude and longitude of home:</td>
            <td>{newlatlong}</td>
          </tr>
          <tr className="test-row">
            <td>Telephone number:</td>
            <td>{tel1}</td>
          </tr>
          <tr className="test-row">
            <td>Residential district:</td>
            <td>{district1}</td>
          </tr>
          <tr className="test-row">
            <td>Divisional secratariat:</td>
            <td>{divisional1}</td>
          </tr>
          <tr className="test-row">
            <td>Grama-Niladari division & number:</td>
            <td>{grama1}</td>
          </tr>

          <tr className="heading">
            <td>Details of Spouse</td>
            <td></td>
          </tr>
          <tr className="test-row">
            <td>Name in full:</td>
            <td>{fullname2}</td>
          </tr>
          <tr className="test-row">
            <td>Name with initials:</td>
            <td>{initials2}</td>
          </tr>
          <tr className="test-row">
            <td>NIC no:</td>
            <td>{nic2}</td>
          </tr>
          <tr className="test-row">
            <td>Are you Sri Lankan:</td>
            <td>{citizen2}</td>
          </tr>
          <tr className="test-row">
            <td>Religion:</td>
            <td>{religion2}</td>
          </tr>
          <tr className="test-row">
            <td>Permanant Address:</td>
            <td>{address2}</td>
          </tr>
          <tr className="test-row">
            <td>Telephone number:</td>
            <td>{tel2}</td>
          </tr>
          <tr className="test-row">
            <td>Residential district:</td>
            <td>{district2}</td>
          </tr>
          <tr className="test-row">
            <td>Divisional secratariat:</td>
            <td>{divisional2}</td>
          </tr>
          <tr className="test-row">
            <td>Grama-Niladari division & number:</td>
            <td>{grama2}</td>
          </tr>

          <tr className="heading">
            <td>Details of Applied Schools</td>
            <td></td>
          </tr>
          <tr className="test-row">
            <td>Name: </td>
            <td>
              <b>{localStorage.getItem("selectedSchool")}</b>
            </td>
          </tr>
          {/* <tr className="test-row">
            <td>
              <b>Distance between home and preferred school 1:</b>
            </td>
            <td>${distances}</td>
          </tr> */}
        </tbody>
      </table>

      <table cellPadding="0" cellSpacing="0" className="no-border-table">
        <tbody>
          <tr className="heading">
            <td>Details on Electorial List</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="test-row">
            <td>Year:</td>
            <td>{year}</td>
          </tr>
          <tr className="test-row">
            <td>Electorial District:</td>
            <td>{district}</td>
          </tr>
          <tr className="test-row">
            <td>Grama-Niladari Div. and No:</td>
            <td>
              {division} {divisionNo}
            </td>
          </tr>
          <tr className="test-row">
            <td>Polling division:</td>
            <td>{pollingDivision}</td>
          </tr>
          <tr className="test-row">
            <td>Street/ Road/ Village:</td>
            <td>{street}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr className="special-row">
            <td>Household No</td>
            <td>Serial No</td>
            <td>Name of electors</td>
          </tr>
          <tr>
            <td>{houseHold}</td>
            <td>{serial}</td>
            <td>{electors}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <h3 className="justify-center">Maximum marks obtained: {maxMarks}</h3>
      <footer>
        <p className="justify-center">
          Report was created on{" "}
          {/* {`${today.getDate()}. ${
            today.getMonth() + 1
          }. ${today.getFullYear()}.`} */}
        </p>
      </footer>
    </div>
  );
};

export default PDFResult;
