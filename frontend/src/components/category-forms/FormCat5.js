import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormCat5.css";

export default function FormCat5() {
  const [reportingDate, setreportingDate] = useState(null);
  const [newName, setnewName] = useState("");
  const [newAddress, setnewAddress] = useState("");
  const [preName, setpreName] = useState("");
  const [preAddress, setpreAddress] = useState("");
  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");
  const [transferDistance, settransferDistance] = useState("");
  const [otherSchools, setotherSchools] = useState("");
  const [employeePeriod, setemployeePeriod] = useState("");
  const [leave2020, setLeave2020] = useState("");
  const [leave2019, setLeave2019] = useState("");
  const [leave2018, setLeave2018] = useState("");
  const [leave2017, setLeave2017] = useState("");
  const [leave2016, setLeave2016] = useState("");

  return (
    <>
      <div className="form-container">
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
                    selected={fromDate}
                    onChange={(date) => setfromDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="From"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={10}
                    showMonthDropdown
                  />
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => settoDate(date)}
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

            <div className="form-distance">
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

            <div className="form-distace">
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
                value={employeePeriod}
                onChange={(e) => setemployeePeriod(e.target.value)}
                required
              />
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
    </>
  );
}
