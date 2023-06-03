import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./SchoolDetails.css";
import { useUpdateSelectedSchools } from "../context/SelectedSchoolsContext";

const SchoolDetails = () => {
  //suggestions model
  const selectedSchools = useUpdateSelectedSchools();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
        `http://localhost:4000/api/schools/suggestions?input=${userInput}`
      );
      const data = await response.json();
      //console.log(data);
      setSuggestions(data.suggestions);
    } catch (error) {
      console.log("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    selectedSchools([]);
  }, []);

  const updateOnClose = () => {
    const temp = [
      selectedSchool1,
      selectedSchool2,
      selectedSchool3,
      selectedSchool4,
    ];
    const selected = temp.filter((sc) => sc !== null);
    selectedSchools(selected);
    alert("Schools are set !");
  };

  // const handleClick = (school) => {
  //   if (school && school !== "" && school.length > 1) {
  //     selectedSchools((prevSelectedSchools) => [
  //       ...prevSelectedSchools,
  //       school,
  //     ]);
  //   }
  // };

  //console.log(selectedSchool1);

  return (
    <>
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
                style={{ width: "100%" }}
                onChange={handleSelectionChange1}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={inputValue}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                )}
              />
            </div>

            <div className="school-details-row">
              <label className="school-label">Preference 2: </label>

              <Autocomplete
                options={suggestions}
                style={{ width: "100%" }}
                onChange={handleSelectionChange2}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={inputValue}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                )}
              />
            </div>

            <div className="school-details-row">
              <label className="school-label">Preference 3: </label>

              <Autocomplete
                options={suggestions}
                style={{ width: "100%" }}
                onChange={handleSelectionChange3}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={inputValue}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                )}
              />
            </div>

            <div className="school-details-row">
              <label className="school-label">Preference 4: </label>

              <Autocomplete
                options={suggestions}
                style={{ width: "100%" }}
                onChange={handleSelectionChange4}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={inputValue}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
        </fieldset>
        <button className="set-button" onClick={(e) => updateOnClose()}>
          Set Schools
        </button>
      </div>
    </>
  );
};
export default SchoolDetails;
