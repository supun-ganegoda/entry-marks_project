import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormCat.css";
import { differenceInMonths } from "date-fns";

export default function FormCat5() {
  const [reportingDate, setreportingDate] = useState(null);
  const [newName, setnewName] = useState("");
  const [newAddress, setnewAddress] = useState("");
  const [preName, setpreName] = useState("");
  const [preAddress, setpreAddress] = useState("");
  const [transferDistance, settransferDistance] = useState("");
  const [otherSchools, setotherSchools] = useState("");
  const [employeePeriod, setemployeePeriod] = useState("");
  const [leave2020, setLeave2020] = useState("");
  const [leave2019, setLeave2019] = useState("");
  const [leave2018, setLeave2018] = useState("");
  const [leave2017, setLeave2017] = useState("");
  const [leave2016, setLeave2016] = useState("");
  const [fromServiceDate, setFromServiceDate] = useState(null);
  const [toServiceDate, setToServiceDate] = useState(null);
  const [duration, setDuration] = useState({ years: 0, months: 0 });
  const [marks5, setMarks5] = useState(0);
  const [time, setTime] = useState("");

  const handleFromServiceDateChange = (date) => {
    setFromServiceDate(date);
    calculateDuration(date, toServiceDate);
  };

  const handleToServiceDateChange = (date) => {
    setToServiceDate(date);
    calculateDuration(fromServiceDate, date);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const calculateDuration = (fromDate, toDate) => {
    if (fromDate && toDate) {
      const months = differenceInMonths(toDate, fromDate);
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      setDuration({ years, months: remainingMonths });
    } else {
      setDuration({ years: 0, months: 0 });
    }
  };

  const calculateMarks = () => {
    let totalMarks = 0;
    let leaves = 0;

    if (duration.years >= 3) {
      totalMarks += 10;
    } else if (duration.years >= 2) {
      totalMarks += 8;
    } else if (duration.years >= 1) {
      totalMarks += 5;
    } else if (duration.months >= 6 && duration.years < 1) {
      totalMarks += 3;
    } else if (duration.months >= 3 && duration.years < 1) {
      totalMarks += 1;
    }

    if (transferDistance >= 150) {
      totalMarks += 35;
    } else if (transferDistance >= 100) {
      totalMarks += 28;
    } else if (transferDistance >= 50) {
      totalMarks += 21;
    } else if (transferDistance >= 25) {
      totalMarks += 14;
    }

    if (otherSchools >= 0 && otherSchools <= 10) {
      totalMarks += 30;
      totalMarks -= otherSchools * 3;
    }

    if (employeePeriod <= 10) {
      totalMarks += employeePeriod * 1;
    } else if (employeePeriod > 10) {
      totalMarks += 10;
    }

    if (time === "y1") {
      totalMarks += 5;
    } else if (time === "y2") {
      totalMarks += 4;
    } else if (time === "y3") {
      totalMarks += 3;
    } else if (time === "y4") {
      totalMarks += 2;
    } else if (time === "y5") {
      totalMarks += 1;
    }

    if (leave2016 >= 20) {
      leaves += leave2016 * 1;
    }
    if (leave2017 >= 20) {
      leaves += leave2017 * 1;
    }
    if (leave2018 >= 20) {
      leaves += leave2018 * 1;
    }
    if (leave2019 >= 20) {
      leaves += leave2019 * 1;
    }
    if (leave2020 >= 20) {
      leaves += leave2020 * 1;
    }

    if (leaves >= 100) {
      totalMarks += 10;
    } else if (leaves >= 80) {
      totalMarks += 8;
    } else if (leaves >= 60) {
      totalMarks += 6;
    } else if (leaves >= 40) {
      totalMarks += 4;
    } else if (leaves >= 20) {
      totalMarks += 2;
    }

    setMarks5(totalMarks);
  };

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <legend>
              Children of officers transferred due to government exigencies or
              annual transfers
            </legend>

            <div className="form-dob">
              <label className="form-label">
                Date of reporting to the place of work as per last transfer
                received:{" "}
              </label>
              <div className="form-datePicker">
                <DatePicker
                  selected={reportingDate}
                  onChange={(date) => setreportingDate(date)}
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
                Name and address of the new work place after receiving the
                transfer:{" "}
              </label>
              <div className="post-holder">
                <input
                  type="text"
                  id="newName"
                  placeholder="Name"
                  value={newName}
                  onChange={(e) => setnewName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="newAddress"
                  placeholder="Address"
                  value={newAddress}
                  onChange={(e) => setnewAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-religion">
              <label className="form-label">
                Name and address of previous work place relevant to the
                transfer:{" "}
              </label>
              <div className="post-holder">
                <input
                  type="text"
                  id="preName"
                  placeholder="Name"
                  value={preName}
                  onChange={(e) => setpreName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="preAddress"
                  placeholder="Address"
                  value={preAddress}
                  onChange={(e) => setpreAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-dob">
              <label className="form-label">
                Continuous period of service in the previous place of work:
              </label>
              <div className="form-datePicker">
                <div className="post-holder">
                  <DatePicker
                    selected={fromServiceDate}
                    onChange={handleFromServiceDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="From"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={10}
                    showMonthDropdown
                  />
                  <DatePicker
                    selected={toServiceDate}
                    onChange={handleToServiceDateChange}
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
              <label className="form-label">
                Distance between the previous place of work and present place of
                work that reported duty on transfer:{" "}
              </label>
              <input
                style={{ maxWidth: "8rem" }}
                type="text"
                id="transferDistance"
                placeholder="km"
                value={transferDistance}
                onChange={(e) => settransferDistance(e.target.value)}
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
                style={{ maxWidth: "8rem" }}
                type="text"
                id="otherSchools"
                value={otherSchools}
                onChange={(e) => setotherSchools(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Period of service as a State/Corporation/ Statutory Board/ State
                Bank employee:{" "}
              </label>
              <input
                type="text"
                id="employeePeriod"
                placeholder="Years"
                value={employeePeriod}
                onChange={(e) => setemployeePeriod(e.target.value)}
                required
              />
            </div>

            <div className="elec-form-row">
              <label>Time lapsed after receiving the transfer.</label>
              <p>To the closing date of application</p>
              <select value={time} onChange={handleTimeChange}>
                <option value="">Select the duration</option>
                <option value="y1">Within one year</option>
                <option value="y2">Within 1 - 2 years</option>
                <option value="y3">Within 2 - 3 years</option>
                <option value="y4">Within 3 - 4 years</option>
                <option value="y5">Within 4 - 5 years</option>
              </select>
            </div>

            <div className="form-religion">
              <label className="form-label">Un-utilized Leave: </label>
              <div className="leave_container">
                <input
                  type="text"
                  id="leave2020"
                  placeholder="2020"
                  value={leave2020}
                  onChange={(e) => setLeave2020(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="leave2019"
                  placeholder="2019"
                  value={leave2019}
                  onChange={(e) => setLeave2019(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="leave2018"
                  placeholder="2018"
                  value={leave2018}
                  onChange={(e) => setLeave2018(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="leave2017"
                  placeholder="2017"
                  value={leave2017}
                  onChange={(e) => setLeave2017(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="leave2016"
                  placeholder="2016"
                  value={leave2016}
                  onChange={(e) => setLeave2016(e.target.value)}
                  required
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      <button onClick={calculateMarks}>Calculate</button>

      <div>
        <p>Marks: {marks5}</p>
        <p>
          Duration: {duration.years} years {duration.months} months
        </p>
      </div>
    </>
  );
}
