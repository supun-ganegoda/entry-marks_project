import { useState } from "react";
import "./ElectorialForm.css";

const ElectorialForm = () => {
  const [year, setYear] = useState("");
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [divisionNo, setDivisionNo] = useState("");
  const [pollingDivision, setPollingDivision] = useState("");
  const [street, setStreet] = useState("");
  const [tableData, setTableData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const handleCellChange = (rowIndex, colIndex, event) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = event.target.value;
    setTableData(newTableData);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };
  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const renderTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Household No</th>
            <th>Serial No</th>
            <th>Name of electors</th>
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
      <div className="elec-form-wrapper">
        <fieldset>
          <legend>Electorial list registrations: </legend>
          <div className="elec-form-container">
            <div className="elec-form-row">
              <label>Year: </label>
              <select value={year} onChange={handleYearChange}>
                <option value="">select the year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>

            <div className="elec-form-row">
              <label>Electorial District: </label>
              <select value={district} onChange={handleDistrictChange}>
                <option value="">select the district</option>
                <option value="colombo">Colombo</option>
                <option value="kaluthara">Kaluthara</option>
                <option value="gampaha">Gampaha</option>
              </select>
            </div>

            <div className="elec-form-row">
              <label>Grama-Niladari Div. and No: </label>
              <span className="elec-form-grama">
                <input
                  type="text"
                  value={division}
                  onChange={handleDivisionChange}
                />
                <input
                  type="text"
                  value={divisionNo}
                  onChange={(e) => setDivisionNo(e.target.value)}
                />
              </span>
            </div>

            <div className="elec-form-row">
              <label>Polling division: </label>
              <input
                type="text"
                value={pollingDivision}
                onChange={(e) => setPollingDivision(e.target.value)}
              />
            </div>

            <div className="elec-form-row">
              <label>Street/ Road/ Village: </label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className="elec-form-table">{renderTable()}</div>
          </div>
        </fieldset>
      </div>
    </>
  );
};
export default ElectorialForm;
