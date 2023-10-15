import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import "./SchoolDetails.css";
import { useUpdateSelectedSchools } from "../context/SelectedSchoolsContext";
import Alert from "@mui/material/Alert";
import Dialog from "../Dialog";

const SchoolDetails = ({ handleClick }) => {
  const url = process.env.REACT_APP_SERVER_URL;
  const [selectedSchool1, setselectedSchool1] = useState("");
  const [selectedSchool2, setselectedSchool2] = useState("");
  const [selectedSchool3, setselectedSchool3] = useState("");
  const [selectedSchool4, setselectedSchool4] = useState("");
  const selectedSchools = useUpdateSelectedSchools(); //school context
  const [suggestions, setSuggestions] = useState([]);
  const [isSchoolsSet, setIsSchoolsSet] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [gender, setGenderVal] = useState("mix");

  const loadSchools = async () => {
    try {
      const token = localStorage.getItem("token");
      const schools = await axios.get(`${url}get-preffered-schools`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      selectedSchools(schools.data[0]); //set loaded schools to school context
      setselectedSchool1(
        schools.data[0].preference1 ? schools.data[0].preference1 : "-"
      );
      setselectedSchool2(
        schools.data[0].preference2 ? schools.data[0].preference2 : "-"
      );
      setselectedSchool3(
        schools.data[0].preference3 ? schools.data[0].preference3 : "-"
      );
      setselectedSchool4(
        schools.data[0].preference4 ? schools.data[0].preference4 : "-"
      );
    } catch (error) {
      console.error("Error loading schools:", error);
    }
  };

  //suggestions model

  const handleSelectionChange1 = (event, values) => {
    setselectedSchool1(values);
  };
  const handleSelectionChange2 = (event, values) => {
    setselectedSchool2(values);
  };
  const handleSelectionChange3 = (event, values) => {
    setselectedSchool3(values);
  };
  const handleSelectionChange4 = (event, values) => {
    setselectedSchool4(values);
  };

  const settingGender = () => {
    if (localStorage.getItem("gender") === "male") {
      setGenderVal("BOY");
    }
    if (localStorage.getItem("gender") === "female") {
      setGenderVal("GIRL");
    }
  };

  const handleInputChange = async (event) => {
    const userInput = event.target.value;

    try {
      const response = await fetch(
        `${url}schools/suggestions?input=${userInput}&gender=${gender}`
      );
      const data = await response.json();
      console.log(data);
      setSuggestions(data.suggestions);
    } catch (error) {
      console.log("Error fetching suggestions:", error);
    }
  };

  const getSelectedSchools = () => {
    const temp = [
      selectedSchool1,
      selectedSchool2,
      selectedSchool3,
      selectedSchool4,
    ];
    const selected = temp.filter((sc) => sc !== null);
    return selected;
  };

  const saveToDatabase = async () => {
    const temp = getSelectedSchools();
    //convert array into object
    const selected = temp.reduce((acc, value, index) => {
      acc[index] = value;
      return acc;
    }, {});
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${url}selected-schools`, selected, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const setGender = async () => {
    try {
      const childDetails = await axios.get(`${url}get-applicant-details`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const resData = childDetails.data[0];
      localStorage.setItem("gender", resData.gender);
    } catch (e) {
      console.log(e);
      setGenderError(true);
    }
  };

  useEffect(() => {
    setGender();
    settingGender();
    loadSchools();
    //selectedSchools([]);
  }, []);

  const updateOnClose = () => {
    const selected = getSelectedSchools();
    selectedSchools(selected);
    setIsSchoolsSet(true);
    saveToDatabase();
    handleClick();
  };

  return (
    <>
      {isSchoolsSet && (
        <Dialog toOpen={true} title={"Info"} body={"Schools are set !"} />
      )}
      <div className="school-details-wrapper">
        <fieldset>
          <legend className="school-details-header">
            Schools applied for (Should be mentioned according to the preference
            order)
          </legend>
          <div className="school-details-container">
            <div className="school-details-row">
              <label className="school-label">Preference 1: </label>

              <Autocomplete
                value={selectedSchool1}
                options={suggestions}
                onChange={handleSelectionChange1}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} onChange={handleInputChange} />
                )}
              />
            </div>

            <div className="school-details-row">
              <label className="school-label">Preference 2: </label>

              <Autocomplete
                value={selectedSchool2}
                options={suggestions}
                onChange={handleSelectionChange2}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} onChange={handleInputChange} />
                )}
              />
            </div>

            <div className="school-details-row">
              <label className="school-label">Preference 3: </label>

              <Autocomplete
                value={selectedSchool3}
                options={suggestions}
                onChange={handleSelectionChange3}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} onChange={handleInputChange} />
                )}
              />
            </div>

            <div className="school-details-row">
              <label className="school-label">Preference 4: </label>

              <Autocomplete
                value={selectedSchool4}
                options={suggestions}
                onChange={handleSelectionChange4}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} onChange={handleInputChange} />
                )}
              />
            </div>
          </div>
        </fieldset>
        <div className="save-btn" onClick={(e) => updateOnClose()}>
          <Button variant="outlined">SAVE & CONTINUE</Button>
        </div>
        <Alert severity="info" style={{ marginTop: "8px", marginRight: "4px" }}>
          Only {gender} schools and mix schools are showing here
        </Alert>
      </div>
      {genderError ? (
        <Dialog
          toOpen={true}
          title={"Info"}
          body={
            "Error loading Boys and Girls schools, only mix schools are loaded. Try setting sex in child details form"
          }
        ></Dialog>
      ) : null}
    </>
  );
};
export default SchoolDetails;
