import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./SchoolDetails.css";
import { useUpdateSelectedSchools } from "../context/SelectedSchoolsContext";
import Alert from "@mui/material/Alert";
import Dialog from "../Dialog";

const SchoolDetails = ({ handleClick }) => {
  const url = process.env.REACT_APP_SERVER_URL;
  //suggestions model
  const selectedSchools = useUpdateSelectedSchools();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSchoolsSet, setIsSchoolsSet] = useState(false);

  const [selectedSchool1, setselectedSchool1] = useState(null);
  const [selectedSchool2, setselectedSchool2] = useState(null);
  const [selectedSchool3, setselectedSchool3] = useState(null);
  const [selectedSchool4, setselectedSchool4] = useState(null);

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

  const handleInputChange = async (event) => {
    const userInput = event.target.value;
    setInputValue(userInput);

    try {
      const response = await fetch(
        `${url}schools/suggestions?input=${userInput}`
      );
      const data = await response.json();
      //console.log(data);
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

  useEffect(() => {
    selectedSchools([]);
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
        <button className="set-button" onClick={(e) => updateOnClose()}>
          SAVE & CONTINUE
        </button>
        <Alert severity="info" style={{ marginTop: "8px", marginRight: "4px" }}>
          Marks are calculated for the first preffered school
        </Alert>
      </div>
    </>
  );
};
export default SchoolDetails;
