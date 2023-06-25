import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormCat.css";
import Modal from "../Modal";
import { differenceInYears } from "date-fns";
import { useSchoolCount } from "../context/SchoolCountContext";
import { MarksContext } from "../context/MarksContext";

export default function FormCat6() {
  const { updateMarks } = useContext(MarksContext);
  const [returnedDate, setreturnedDate] = useState("");
  const schoolNumber = useSchoolCount(); //school count from the home to selected school
  const [fromAbroadDate, setfromAbroadDate] = useState("");
  const [toAbroadDate, settoAbroadDate] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [marks, setmarks] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleMarksChange = (newValue) => {
    updateMarks("cat6", newValue);
  };

  const handleReasonChange = (e) => {
    setSelectedReason(e.target.value);
  };

  const handleFromAbroadDateChange = (date) => {
    setfromAbroadDate(date);
    calculateDuration(date, toAbroadDate);
  };

  const handleToAbroadDateChange = (date) => {
    settoAbroadDate(date);
    calculateDuration(fromAbroadDate, date);
  };

  const calculateDuration = (fromDate, toDate) => {
    if (fromDate && toDate) {
      const years = differenceInYears(toDate, fromDate);
      setDuration(years);
    } else {
      setDuration(0);
    }
  };

  const calculateMarks = () => {
    let totalMarks = 0;

    if (duration >= 3) {
      totalMarks += 25;
    } else if (duration >= 2) {
      totalMarks += 15;
    } else if (duration >= 1) {
      totalMarks += 10;
    }

    if (selectedReason === "reason1") {
      totalMarks += 40;
    } else if (selectedReason === "reason2") {
      totalMarks += 30;
    } else if (selectedReason === "reason3") {
      totalMarks += 25;
    } else if (selectedReason === "reason4") {
      totalMarks += 20;
    }

    if (schoolNumber >= 0 && schoolNumber <= 10) {
      totalMarks += 35;
      totalMarks -= schoolNumber * 3.5;
    }

    setmarks(totalMarks);
    handleMarksChange(true);
  };

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <div className="form-religion">
              <label className="form-label">
                Date returned to the country:{" "}
              </label>
              <div className="form-datePicker">
                <DatePicker
                  selected={returnedDate}
                  onChange={(date) => setreturnedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={10}
                  showMonthDropdown
                />
              </div>
            </div>

            <div className="form-religion">
              <label className="form-label">
                Period of continuously stayed abroad with the child:{" "}
              </label>
              <div className="form-datePicker">
                <div className="post-holder">
                  <DatePicker
                    selected={fromAbroadDate}
                    onChange={handleFromAbroadDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="From"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={10}
                    showMonthDropdown
                  />
                  <DatePicker
                    selected={toAbroadDate}
                    onChange={handleToAbroadDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={10}
                    showMonthDropdown
                  />
                </div>
              </div>
            </div>

            <div className="form-medium">
              <label className="form-label">Reason for being abroad: </label>
              <div className="form-medium-selector">
                <div>
                  <input
                    type="radio"
                    id="reason1"
                    name="listBox"
                    value="reason1"
                    checked={selectedReason === "reason1"}
                    onChange={handleReasonChange}
                  />
                  <label htmlFor="reason1">For Sri Lankan Mission abroad</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="reason2"
                    name="listBox"
                    value="reason2"
                    checked={selectedReason === "reason2"}
                    onChange={handleReasonChange}
                  />
                  <label htmlFor="reason2">
                    Personal Employment Requirement
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="reason3"
                    name="listBox"
                    value="reason3"
                    checked={selectedReason === "reason3"}
                    onChange={handleReasonChange}
                  />
                  <label htmlFor="reason3">
                    For requirement of Government of Sri Lanka
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="reason4"
                    name="listBox"
                    value="reason4"
                    checked={selectedReason === "reason4"}
                    onChange={handleReasonChange}
                  />
                  <label htmlFor="reason4">For a scholarship</label>
                </div>
              </div>
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of other schools where the child could be admitted and
                located closer to the place of residence other than the school
                applied for:{" "}
              </label>
              <input
                type="text"
                id="otherSchools"
                value={schoolNumber[0]}
                readOnly
                required
              />
            </div>
          </fieldset>
        </form>
      </div>

      <div className="form-display-marks" onClick={(e) => calculateMarks()}>
        <Modal
          buttonText={"View Marks"}
          bodyHeader={
            "Marks for category based on Children of persons arriving after living abroad with the child"
          }
          bodyText={marks.toString()}
        />
      </div>
    </>
  );
}
