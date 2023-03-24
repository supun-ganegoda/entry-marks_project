import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ChildDetails.css";

const ChildDetails = () => {
  const [fullName, setFullName] = useState("");
  const [initials, setInitials] = useState("");
  const [religion, setReligion] = useState("");
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  function handleMaleCheckboxChange() {
    setMaleChecked(true);
    setFemaleChecked(false);
  }

  function handleFemaleCheckboxChange() {
    setFemaleChecked(true);
    setMaleChecked(false);
  }
  return (
    <>
      <div className="form-container">
        <form>
          <fieldset>
            <legend>Child Details</legend>
            <div className="form-fullname">
              <label className="form-label">Name in full: </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-initilas">
              <label className="form-label">Name with initials: </label>
              <input
                type="text"
                id="initials"
                value={initials}
                onChange={(e) => setInitials(e.target.value)}
                required
              />
            </div>

            <div className="form-sex">
              <label className="form-label">Sex: </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={maleChecked}
                  onChange={handleMaleCheckboxChange}
                />
                Male
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={femaleChecked}
                  onChange={handleFemaleCheckboxChange}
                />
                Female
              </label>
            </div>

            <div className="form-religion">
              <label className="form-label">Religion: </label>
              <input
                type="text"
                id="initials"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                required
              />
            </div>

            <div className="form-medium">
              <label className="form-label">Medium of learning: </label>
              <div className="form-medium-selector">
                <div>
                  <input
                    type="radio"
                    id="sinhala"
                    name="listBox"
                    value="sinhala"
                    checked={selectedOption === "sinhala"}
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
                    checked={selectedOption === "tamil"}
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
                    checked={selectedOption === "english"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="english">English</label>
                </div>
              </div>
            </div>

            <div className="form-dob">
              <label className="form-label">Date of birth:</label>
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
        </form>
      </div>
    </>
  );
};
export default ChildDetails;
