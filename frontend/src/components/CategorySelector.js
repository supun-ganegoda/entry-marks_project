import { useState } from "react";
import "./CategorySelector.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useUpdateSelectedForms } from "./context/FormContext";

const CategorySelector = () => {
  // const selectedForms = useUpdateSelectedForms();
  // const [proximity, setProximity] = useState(false);
  // const [pastPupil, setPastPupil] = useState(false);
  // const [cousins, setCousins] = useState(false);
  // const [staff, setStaff] = useState(false);
  // const [officers, setOfficers] = useState(false);
  // const [forigion, setForigion] = useState(false);
  // let selectedCategories;

  const navigate = useNavigate();
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleProceed = () => {
    navigate("/catHolder", { state: { checkboxes } });
  };

  // const handleProximityChange = () => {
  //   setProximity(!proximity);
  // };
  // const handlePastPupilChange = () => {
  //   setPastPupil(!pastPupil);
  // };
  // const handleCousinsChange = () => {
  //   setCousins(!cousins);
  // };
  // const handleStaffChange = () => {
  //   setStaff(!staff);
  // };
  // const handleOfficersChange = () => {
  //   setOfficers(!officers);
  // };
  // const handleForigionChange = () => {
  //   setForigion(!forigion);
  // };
  // const handleProceed = () => {
  //   selectedCategories = {
  //     proximity,
  //     pastPupil,
  //     cousins,
  //     staff,
  //     officers,
  //     forigion,
  //   };
  //   //console.log(selectedCategories);
  //   selectedForms(selectedCategories);
  // };

  return (
    <>
      <div className="selector-container">
        <div className="selector-header">
          <h3>Select the Relevent Categories</h3>
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
          <button onClick={handleProceed}>Next</button>
        </div>
      </div>
    </>
  );
};
export default CategorySelector;
