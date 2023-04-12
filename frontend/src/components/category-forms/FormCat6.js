import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormCat6.css";

export default function FormCat6() {
  const [returnedDate, setreturnedDate] = useState("");
  const [fromAbroadDate, setfromAbroadDate] = useState("");
  const [toAbroadDate, settoAbroadDate] = useState("");
  const [reason, setreason] = useState("");
  const [otherSchools, setotherSchools] = useState("");

  return (
    <>
      <div className="form-container">
        <form>
          <fieldset>
            <legend>
              Children of persons arriving after living abroad with the child
            </legend>

            <div className="form-dob">
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

            <div className="form-dob">
              <label className="form-label">
                Period of continuously stayed abroad with the child:{" "}
              </label>
              <div className="form-datePicker">
                <div className="post-holder">
                  <DatePicker
                    selected={fromAbroadDate}
                    onChange={(date) => setfromAbroadDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="From"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={10}
                    showMonthDropdown
                  />
                  <DatePicker
                    selected={toAbroadDate}
                    onChange={(date) => settoAbroadDate(date)}
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

            <div className="form-religion">
              <label className="form-label">Reasons for staying abroad: </label>
              <input
                type="text"
                id="reason"
                value={reason}
                onChange={(e) => setreason(e.target.value)}
                required
              />
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
                value={otherSchools}
                onChange={(e) => setotherSchools(e.target.value)}
                required
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
