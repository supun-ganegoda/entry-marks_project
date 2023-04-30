import { useState } from "react";
import "./CategorySelector.css";
import { Link } from "react-router-dom";
import { useUpdateSelectedForms } from "./context/FormContext";

const CategorySelector = () => {
  const selectedForms = useUpdateSelectedForms();
  const [proximity, setProximity] = useState(false);
  const [pastPupil, setPastPupil] = useState(false);
  const [cousins, setCousins] = useState(false);
  const [staff, setStaff] = useState(false);
  const [officers, setOfficers] = useState(false);
  const [forigion, setForigion] = useState(false);
  let selectedCategories;

  const handleProximityChange = () => {
    setProximity(!proximity);
  };
  const handlePastPupilChange = () => {
    setPastPupil(!pastPupil);
  };
  const handleCousinsChange = () => {
    setCousins(!cousins);
  };
  const handleStaffChange = () => {
    setStaff(!staff);
  };
  const handleOfficersChange = () => {
    setOfficers(!officers);
  };
  const handleForigionChange = () => {
    setForigion(!forigion);
  };
  const handleProceed = () => {
    selectedCategories = {
      proximity,
      pastPupil,
      cousins,
      staff,
      officers,
      forigion,
    };
    //console.log(selectedCategories);
    selectedForms(selectedCategories);
  };

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
              checked={proximity}
              onChange={handleProximityChange}
            />
            <input
              type="checkbox"
              checked={pastPupil}
              onChange={handlePastPupilChange}
            />
            <input
              type="checkbox"
              checked={cousins}
              onChange={handleCousinsChange}
            />
            <input
              type="checkbox"
              checked={staff}
              onChange={handleStaffChange}
            />
            <input
              type="checkbox"
              checked={officers}
              onChange={handleOfficersChange}
            />
            <input
              type="checkbox"
              checked={forigion}
              onChange={handleForigionChange}
            />
          </div>
        </div>
        <div className="selector-proceed">
          <Link to="/sidebar">
            <button>Back</button>
          </Link>
          <Link to="/categoryHolder">
            <button onClick={handleProceed}>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default CategorySelector;
