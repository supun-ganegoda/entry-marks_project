import { useState } from "react";
import "./OtherSchoolDetails.css";

const OtherSchoolDetails = () => {
  console.log("other");
  const [fields, setFields] = useState([{ label: "", value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { label: "", value: "" }]);
  };

  const handleTextChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].label = event.target.value;
    //setFields(newFields);
  };

  const renderFields = () => {
    return fields.map((field, index) => (
      <div key={index} className="otherSchool-row">
        <label >
        
          School {index + 1}:
          </label>
          <input
            type="text"
            value={field.label}
            style={{ flexGrow: 1 }}
            onChange={(e) => handleTextChange(index, e)}
          />
        
      </div>
    ));
  };
  return (
    <>
      <div className="otherSchool-wrapper">
        <fieldset>
          <legend>Details of near Schools</legend>
          <p>Other schools where the child could be admitted and located closer to your place of residence than the schools applied by this application</p>
          {renderFields()}
          <button className="otherSchool-button" onClick={handleAddField}>
            Add
          </button>
        </fieldset>
      </div>
    </>
  );
};
export default OtherSchoolDetails;
