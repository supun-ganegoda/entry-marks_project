import { useState, useContext } from "react";
import "./FormCat.css";
import Modal from "../Modal";
import Alert from "@mui/material/Alert";
import { useSchoolCount } from "../context/SchoolCountContext";
import { MarksContext } from "../context/MarksContext";

export default function FormCat3() {
  const { updateMarks } = useContext(MarksContext);
  const { updateFinalMarks } = useContext(MarksContext);
  const [mainDoc, setMainDoc] = useState(false);
  const [noMainDoc, setNoMainDoc] = useState(false);
  const [noOfBrothers, setNoOfbrothers] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [year, setYears] = useState("");
  const [secondDoc, setSecondDoc] = useState(false);
  const [noSecondDoc, setNoSecondDoc] = useState(false);
  const [thirdDoc, setThirdDoc] = useState(false);
  const [noThirdDoc, setNoThirdDoc] = useState(false);
  const [yearsApplicant, setYearApplicant] = useState("");
  const [yearsSpouse, setYearSpouse] = useState("");
  const [yearsRegister, setYearsRegister] = useState("");
  const schoolNumber = useSchoolCount(); //school count from the home to selected school
  //console.log(schoolCount);
  const [gainedAchievements, setgainedAchievements] = useState(false);
  const [nogainedAchievements, setnogainedAchievements] = useState(false);
  const [tableData, setTableData] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [marks, setMarks] = useState(0);

  const handleMarksChange = (newValue) => {
    updateMarks("cat3", newValue);
  };

  const handleMainDocChange = () => {
    setMainDoc(true);
    setNoMainDoc(false);
  };
  const handleNoMainDocChange = () => {
    setMainDoc(false);
    setNoMainDoc(true);
  };

  const handleSecondDocChange = () => {
    setSecondDoc(true);
    setNoSecondDoc(false);
  };
  const handleNoSecondDocChange = () => {
    setSecondDoc(false);
    setNoSecondDoc(true);
  };

  const handleThirdDocChange = () => {
    setThirdDoc(true);
    setNoThirdDoc(false);
  };
  const handleNoThirdDocChange = () => {
    setThirdDoc(false);
    setNoThirdDoc(true);
  };

  const handleSelectOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

  const handleYearChange = (event) => {
    setYears(event.target.value);
  };

  const handleGainAchievements = () => {
    setgainedAchievements(true);
    setnogainedAchievements(false);
  };

  const handleNoGainedAchievements = () => {
    setgainedAchievements(false);
    setnogainedAchievements(true);
  };

  const handleCellChange = (rowIndex, colIndex, event) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = event.target.value;
    setTableData(newTableData);
  };

  const calculateMarks = () => {
    let totalMarks3 = 0;

    let AdmissionGrade = 0;

    let maxValue = 0;

    tableData.forEach((rowData) => {
      const fifthColumnValue = rowData[4];

      if (fifthColumnValue > maxValue) {
        maxValue = fifthColumnValue;
        AdmissionGrade = rowData[3];
      }
    });

    if (maxValue >= 10) {
      totalMarks3 += 20;
    } else if (maxValue < 10) {
      totalMarks3 += maxValue * 2;
    }

    if (AdmissionGrade === "1") {
      totalMarks3 += 5;
    }

    if (noOfBrothers >= 2) {
      totalMarks3 += 5;
    }

    if (gainedAchievements) {
      totalMarks3 += 10;
    }

    if (mainDoc) {
      if (selectOption === "option1") {
        if (year === "5") {
          totalMarks3 += 10;
        } else if (year === "4") {
          totalMarks3 += 8;
        } else if (year === "3") {
          totalMarks3 += 6;
        } else if (year === "2") {
          totalMarks3 += 4;
        } else if (year === "1") {
          totalMarks3 += 1;
        } else if (year === "6") {
          totalMarks3 += 2;
        } else {
          totalMarks3 += 0.5;
        }
      } else if (selectOption === "option2") {
        if (year === "5") {
          totalMarks3 += 6;
        } else if (year === "4") {
          totalMarks3 += 4;
        } else if (year === "3") {
          totalMarks3 += 3.6;
        } else if (year === "2") {
          totalMarks3 += 2.4;
        } else if (year === "1") {
          totalMarks3 += 0.6;
        } else if (year === "6") {
          totalMarks3 += 1.2;
        } else {
          totalMarks3 += 0.3;
        }
      } else if (
        selectOption === "option3" ||
        selectOption === "option4" ||
        selectOption === "option5"
      ) {
        if (year === "5") {
          totalMarks3 += 4;
        } else if (year === "4") {
          totalMarks3 += 3.2;
        } else if (year === "3") {
          totalMarks3 += 2.4;
        } else if (year === "2") {
          totalMarks3 += 1.6;
        } else if (year === "1") {
          totalMarks3 += 0.4;
        } else if (year === "6") {
          totalMarks3 += 0.8;
        } else {
          totalMarks3 += 0.2;
        }
      }
    } else if (noMainDoc && secondDoc) {
      totalMarks3 += 2;
    } else if (noSecondDoc && thirdDoc) {
      totalMarks3 += 6;
    }

    if (yearsApplicant >= 5 || yearsRegister >= 5) {
      if (yearsSpouse >= 5 || yearsRegister >= 5) {
        totalMarks3 += 20;
      } else if (yearsSpouse >= 4) {
        totalMarks3 += 18;
      } else if (yearsSpouse >= 3) {
        totalMarks3 += 16;
      } else if (yearsSpouse >= 2) {
        totalMarks3 += 14;
      } else if (yearsSpouse >= 1) {
        totalMarks3 += 12;
      } else {
        totalMarks3 += 10;
      }
    }

    if (30 - schoolNumber[0] * 3 > 0) {
      totalMarks3 += 30 - schoolNumber[0] * 3;
    }

    console.log(totalMarks3);
    setMarks(totalMarks3);
    handleMarksChange(true);
    updateFinalMarks("Based on Brothers/ sistors of student", totalMarks3);
  };

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name of the child</th>
            <th>Grade</th>
            <th>Admission No</th>
            <th>Admission Grade</th>
            <th>Grades spent</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, colIndex) => (
                <td key={colIndex}>
                  <input
                    className="elec-form-table-input"
                    type="text"
                    value={cellData}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <Alert severity="info" style={{ marginBottom: "8px" }}>
              If a child/children of applicant is/are studying in the school
            </Alert>

            <div className="form-religion">
              <label className="form-label">
                Number of brothers / sisters study in the applied school :{" "}
              </label>
              <input
                type="number"
                id="noOfBrothers"
                value={noOfBrothers}
                onChange={(e) => setNoOfbrothers(e.target.value)}
                required
                style={{
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div className="elec-form-table">{renderTable()}</div>

            <div className="form-religion">
              <label className="form-label">
                Achievements gained for the school by brothers / sisters in the
                school and various types of assistance provided by the applicant
                for the development of the school:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={gainedAchievements}
                  onChange={handleGainAchievements}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={nogainedAchievements}
                  onChange={handleNoGainedAchievements}
                />
                No
              </label>
            </div>

            <div className="form-sex">
              <label className="form-label">
                Main document in proof of place of living:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={mainDoc}
                  onChange={handleMainDocChange}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={noMainDoc}
                  onChange={handleNoMainDocChange}
                />
                No
              </label>
              {mainDoc && (
                <div>
                  {
                    <div className="yearSelector" style={{ marginTop: "8px" }}>
                      <label>Year: </label>
                      <select value={year} onChange={handleYearChange}>
                        <option value="">select the year</option>
                        <option value="5">5 years or more</option>
                        <option value="4">4 - 5 years</option>
                        <option value="3">3 - 4 years</option>
                        <option value="2">2 - 3 years</option>
                        <option value="6">1 - 2 years</option>
                        <option value="1">1 year - 6 months</option>
                        <option value="0">Less than 6 months</option>
                      </select>
                    </div>
                  }
                  {
                    <div className="form-medium">
                      <div className="form-medium-selector">
                        <div>
                          <input
                            type="radio"
                            id="option1"
                            name="listBox"
                            value="option1"
                            checked={selectOption === "option1"}
                            onChange={handleSelectOptionChange}
                          />
                          <label htmlFor="option1">
                            Ownwership of the place of residence is in the name
                            of the applicant/ spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option2"
                            name="listBox"
                            value="option2"
                            checked={selectOption === "option2"}
                            onChange={handleSelectOptionChange}
                          />
                          <label htmlFor="option2">
                            Ownwership is in the name of mother/ father of
                            applicant/ spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option3"
                            name="listBox"
                            value="option3"
                            checked={selectOption === "option3"}
                            onChange={handleSelectOptionChange}
                          />
                          <label htmlFor="option3">
                            Continuously registered leased bond only in the name
                            of applicant/ spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option4"
                            name="listBox"
                            value="option4"
                            checked={selectOption === "option4"}
                            onChange={handleSelectOptionChange}
                          />

                          <label htmlFor="option4">
                            Government Quarters List only in name if applicant/
                            spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option5"
                            name="listBox"
                            value="option5"
                            checked={selectOption === "option5"}
                            onChange={handleSelectOptionChange}
                          />
                          <label htmlFor="option5">
                            The applicant/ spouse resides conteneously 10 years
                            or more in a government property
                          </label>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              )}

              {noMainDoc && (
                <div>
                  {
                    <div className="form-sex">
                      <label className="form-label">
                        Other Documents to prove place of residance{" "}
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={secondDoc}
                          onChange={handleSecondDocChange}
                        />
                        Yes
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={noSecondDoc}
                          onChange={handleNoSecondDocChange}
                        />
                        No
                      </label>
                    </div>
                  }
                </div>
              )}

              {noSecondDoc && (
                <div>
                  {<p>If the nearest school is the applied school,</p>}
                  {
                    <div className="form-sex">
                      <label className="form-label">
                        Documents to prove the present place of living after the
                        marriage{" "}
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={thirdDoc}
                          onChange={handleThirdDocChange}
                        />
                        Yes
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={noThirdDoc}
                          onChange={handleNoThirdDocChange}
                        />
                        No
                      </label>
                    </div>
                  }
                </div>
              )}
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the applicant was included in the electoral
                register:{" "}
              </label>
              <input
                type="number"
                id="applicantNumber"
                value={yearsApplicant}
                onChange={(e) => setYearApplicant(e.target.value)}
                required
                style={{
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the applicant’s spouse was included in the
                electoral register:{" "}
              </label>
              <input
                type="number"
                id="spouseNumber"
                value={yearsSpouse}
                onChange={(e) => setYearSpouse(e.target.value)}
                required
                style={{
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the legal guardian was included in the
                electoral register:{" "}
              </label>
              <input
                type="number"
                id="guardianNumber"
                value={yearsRegister}
                onChange={(e) => setYearsRegister(e.target.value)}
                required
                style={{
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <Alert severity="info" style={{ marginBottom: "8px" }}>
              This is applicable for a period of recent 05 years, prior to the
              year the application is submitted
            </Alert>

            <div className="form-religion">
              <label className="form-label">
                Number of schools located closer to the place of residence where
                the child could be admitted than the school applied by this
                application:{" "}
              </label>
              <input
                type="text"
                id="schoolNumber"
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
            "Marks for category based on Brothers/ sistors of students studying in the school at present"
          }
          bodyText={marks.toString()}
        />
      </div>
    </>
  );
}
