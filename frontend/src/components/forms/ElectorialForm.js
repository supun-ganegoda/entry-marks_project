import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ElectorialForm.css";

const ElectorialForm = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [divisionNo, setDivisionNo] = useState("");
  const [pollingDivision, setPollingDivision] = useState("");
  const [street, setStreet] = useState("");
  const [houseHold, setHouseHold] = useState("");
  const [electors, setElectors] = useState("");
  const [serial, setSerial] = useState("");
  const [elements, setElements] = useState([]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };
  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const addElement = () => {
    const newElement = (
      <fieldset>
        <div className="elec-form-container" key={elements.length}>
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
              <option value="Galle">Galle</option>
              <option value="Matara">Mathara</option>
              <option value="Kaluthara">Kaluthara</option>
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

          <div className="elec-form-row">
            <label>Household No: </label>
            <input
              style={{ maxWidth: "10rem" }}
              type="text"
              value={houseHold}
              onChange={(e) => setHouseHold(e.target.value)}
            />
          </div>

          <div className="elec-form-row">
            <label>Serial No: </label>
            <input
              style={{ maxWidth: "10rem" }}
              type="text"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>

          <div className="elec-form-row">
            <label>Electors: </label>
            <input
              style={{ maxWidth: "20rem" }}
              type="text"
              value={electors}
              onChange={(e) => setElectors(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={() => removeElement(elements.length)}
          style={{ padding: "4px", borderRadius: "4px" }}
        >
          Remove
        </button>
      </fieldset>
    );

    setElements([...elements, newElement]);
  };

  const removeElement = (index) => {
    const updatedElements = elements.filter((_, i) => i !== index);
    setElements(updatedElements);
  };

  useEffect(() => {
    loadElectorialDetails();
  }, []);

  const loadElectorialDetails = async () => {
    const token = localStorage.getItem("token");
    try {
      const electorialData = await axios.get(`${url}get-electorial-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resData = electorialData.data[0];
      setYear(resData.year);
      setDistrict(resData.district);
      setDivision(resData.division);
      setDivisionNo(resData.divisionNo);
      setPollingDivision(resData.pollingDivision);
      setStreet(resData.street);
      setHouseHold(resData.houseHold);
      setElectors(resData.electors);
      setSerial(resData.serial);
    } catch (error) {
      console.error("Error loading electorial details:", error);
    }
  };

  const handleElectorialDetailsSubmit = async (event) => {
    //console.log("Submit clicked");
    event.preventDefault();

    const electorialDetails = {
      year,
      district,
      division,
      divisionNo,
      pollingDivision,
      street,
      houseHold,
      serial,
      electors,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${url}electorial-details`,
        electorialDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data); // Handle success response
      navigate("/categorySelector");
    } catch (error) {
      console.error(error); // Handle error
    }
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
                <option value="Galle">Galle</option>
                <option value="Matara">Mathara</option>
                <option value="Kaluthara">Kaluthara</option>
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

            <div className="elec-form-row">
              <label>Household No: </label>
              <input
                style={{ maxWidth: "10rem" }}
                type="text"
                value={houseHold}
                onChange={(e) => setHouseHold(e.target.value)}
              />
            </div>

            <div className="elec-form-row">
              <label>Serial No: </label>
              <input
                style={{ maxWidth: "10rem" }}
                type="text"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
              />
            </div>

            <div className="elec-form-row">
              <label>Electors: </label>
              <input
                style={{ maxWidth: "20rem" }}
                type="text"
                value={electors}
                onChange={(e) => setElectors(e.target.value)}
              />
            </div>
          </div>
        </fieldset>

        <div>
          {elements.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
        </div>

        <div className="add-block" style={{ textAlign: "center" }}>
          <button onClick={addElement}>Add more</button>
        </div>

        <div className="form-proceed">
          <button onClick={handleElectorialDetailsSubmit}>Proceed</button>
        </div>
      </div>
    </>
  );
};
export default ElectorialForm;
