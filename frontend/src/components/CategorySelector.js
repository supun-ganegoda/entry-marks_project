import { useEffect, useState, useContext } from "react";
import "./CategorySelector.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MarksContext } from "./context/MarksContext";
//import { useUpdateSelectedForms } from "./context/FormContext";

const CategorySelector = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSchools, setSelectedSchools] = useState([]);
  const { clearMarksContext } = useContext(MarksContext); //set all calculated marks to zero if return back
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
    console.log(selectedSchool);
    //localStorage.setItem("selectedSchool", selectedSchool);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({ ...prevState, [name]: checked }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${url}get-preffered-schools`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //console.log(Object.values(response.data[0]));
        const temp = Object.values(response.data[0]);
        temp.pop();
        setSelectedSchools(temp);
        setSelectedSchool(temp[0]);
        console.log(selectedSchools);
      } catch (error) {
        console.error("Error loading schools:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    checkChecked();
    clearMarksContext();
  }, [checkboxes]);

  const checkChecked = () => {
    let checked = false;
    Object.keys(checkboxes).forEach((key) => {
      checked ||= checkboxes[key];
    });
    setIsChecked(checked);
  };

  const handleProceed = () => {
    localStorage.setItem("selectedSchool", selectedSchool);
    navigate("/catHolder", { state: { checkboxes } });
  };

  return (
    <>
      <div className="selector-container">
        <div className="selector-header">
          <h3>Apply based on Catergories</h3>
        </div>

        <div className="school-selector">
          <label>Select the applying school: </label>
          <select
            value={selectedSchool}
            onChange={handleSchoolChange}
            style={{ maxWidth: "100%" }}
          >
            {/* <option value="">select school</option> */}
            {selectedSchools.map((school, key) => (
              <option key={key} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>

        <div className="selector-categories">
          <div className="categories">
            <label>Children of residents close proximity to the school</label>
            <label>Children of past pupils</label>
            <label>
              Brothers/ sistors of students studying in the school at present
            </label>
            <label>
              Children of staff in education institutions involved in school
              education
            </label>
            <label>
              Children of officers transffered due to government exigencies or
              annual transfers
            </label>
            <label>
              Children of persons arriving after living abroad with the child
            </label>
          </div>
          <div className="selectors">
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox4"
              checked={checkboxes.checkbox4}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox5"
              checked={checkboxes.checkbox5}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox6"
              checked={checkboxes.checkbox6}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <div className="selector-proceed">
          <Link to="/sidebar">
            <button>Back</button>
          </Link>
          {isChecked ? <button onClick={handleProceed}>Next</button> : null}
        </div>
      </div>
    </>
  );
};
export default CategorySelector;
