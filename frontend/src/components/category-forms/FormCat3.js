import { useState } from "react";
import "./FormCat.css";

export default function FormCat3() {
  const [mainDoc, setMainDoc] = useState(false);
  const [noMainDoc, setNoMainDoc] = useState(false);
  const [yearsApplicant, setYearApplicant] = useState("");
  const [yearsSpouse, setYearSpouse] = useState("");
  const [yearsRegister, setYearsRegister] = useState("");
  const [noOfSchooles, setNoOfSchools] = useState("");
  const [gainedAchievements, setgainedAchievements] = useState("");
  const [tableData, setTableData] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const handleMainDocChange = () => {
    setMainDoc(true);
    setNoMainDoc(false);
  };
  const handleNoMainDocChange = () => {
    setMainDoc(false);
    setNoMainDoc(true);
  };

  const handleCellChange = (rowIndex, colIndex, event) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = event.target.value;
    setTableData(newTableData);
  };

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name of the child</th>
            <th>Garde</th>
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
            <legend>
              Brothers/ sisters of students studying in the school at present
            </legend>

            <div>
              <p>
                If a child/children of applicant is/are studying in the school
              </p>
            </div>

            <div className="elec-form-table">{renderTable()}</div>

            <div className="form-religion">
              <label className="form-label">
                Achievements gained for the school by brothers / sisters in the
                school and various types of assistance provided by the applicant
                for the development of the school:{" "}
              </label>
              <input
                type="text"
                id="gainedAchievements"
                value={gainedAchievements}
                onChange={(e) => setgainedAchievements(e.target.value)}
                required
              />
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
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the applicant was included in the electoral
                register:{" "}
              </label>
              <input
                type="text"
                id="applicantNumber"
                value={yearsApplicant}
                onChange={(e) => setYearApplicant(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the applicant’s spouse was included in the
                electoral register:{" "}
              </label>
              <input
                type="text"
                id="spouseNumber"
                value={yearsSpouse}
                onChange={(e) => setYearSpouse(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the legal guardian was included in the
                electoral register:{" "}
              </label>
              <input
                type="text"
                id="guardianNumber"
                value={yearsRegister}
                onChange={(e) => setYearsRegister(e.target.value)}
                required
              />
            </div>

            <div>
              <p>
                (This is applicable for a period of recent 05 years, prior to
                the year the application is submitted)
              </p>
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of schools located closer to the place of residence where
                the child could be admitted than the school applied by this
                application:{" "}
              </label>
              <input
                type="text"
                id="schoolNumber"
                value={noOfSchooles}
                onChange={(e) => setNoOfSchools(e.target.value)}
                required
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
