import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Button from "@mui/material/Button";
import "react-datepicker/dist/react-datepicker.css";
import "./ChildDetails.css";

const ChildDetails = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const [fullName, setFullName] = useState("");
  const [initials, setInitials] = useState("");
  const [religion, setReligion] = useState("");
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [medium, setmedium] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOptionChange = (e) => {
    setmedium(e.target.value);
  };

  function handleMaleCheckboxChange() {
    setMaleChecked(true);
    setFemaleChecked(false);
  }

  function handleFemaleCheckboxChange() {
    setFemaleChecked(true);
    setMaleChecked(false);
  }

  //backend connections

  const handleChildDetailsSubmit = async (event) => {
    console.log("Submit clicked");
    event.preventDefault();
    let gender = "";
    maleChecked ? (gender = "male") : (gender = "female");
    let birth = selectedDate.toLocaleDateString();

    const childDetailsData = {
      fullName,
      initials,
      religion,
      gender,
      medium,
      birth,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${url}child-details`,
        childDetailsData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleChildDetailsSubmit}>
          <fieldset>
            <legend>Child Details</legend>
            <div className="form-fullname">
              <label className="label-form">Name in full: </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-initilas">
              <label className="label-form">Name with initials: </label>
              <input
                type="text"
                id="initials"
                value={initials}
                onChange={(e) => setInitials(e.target.value)}
                required
              />
            </div>

            <div className="form-sex">
              <label className="label-form">Sex: </label>
              <div className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={maleChecked}
                  onChange={handleMaleCheckboxChange}
                />
                Male
              </div>
              <div className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={femaleChecked}
                  onChange={handleFemaleCheckboxChange}
                />
                Female
              </div>
            </div>

            <div className="form-religion">
              <label className="label-form">Religion: </label>
              <input
                type="text"
                id="initials"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                required
              />
            </div>

            <div className="form-medium">
              <label className="label-form">Medium of learning: </label>
              <div className="medium-selector">
                <div>
                  <input
                    type="radio"
                    id="sinhala"
                    name="listBox"
                    value="sinhala"
                    checked={medium === "sinhala"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="sinhala">Sinhala</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="tamil"
                    name="listBox"
                    value="tamil"
                    checked={medium === "tamil"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="tamil">Tamil</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="english"
                    name="listBox"
                    value="english"
                    checked={medium === "english"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="english">English</label>
                </div>
              </div>
            </div>

            <div className="form-dob">
              <label className="label-form">Date of birth:</label>
              <div className="form-datePicker">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={10}
                  showMonthDropdown
                />
              </div>
            </div>
          </fieldset>
          <div className="save-btn">
            <Button type="submit" variant="outlined">
              SAVE
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ChildDetails;
