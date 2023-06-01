import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./SchoolDetails.css";

const SchoolDetails = () => {
  //suggestions model
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const userInput = event.target.value;
    setInputValue(userInput);

    try {
      const response = await fetch(
        `http://localhost:4000/api/schools/suggestions?input=${userInput}`
      );
      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (error) {
      console.log("Error fetching suggestions:", error);
    }
  };

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
      </div>
    </>
  );
};
export default SchoolDetails;
