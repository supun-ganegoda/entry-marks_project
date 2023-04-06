import { useState } from "react";
import './SchoolDetails.css'

const SchoolDetails = () => {
  const [type1, setType1] = useState("");
  const [school1, setSchool1] = useState("");
  const [distance1, setDistance1] = useState(0)
  const [type2, setType2] = useState("");
  const [school2, setSchool2] = useState("");
  const [distance2, setDistance2] = useState(0)
  const [type3, setType3] = useState("");
  const [school3, setSchool3] = useState("");
  const [distance3, setDistance3] = useState(0)
  const [type4, setType4] = useState("");
  const [school4, setSchool4] = useState("");
  const [distance4, setDistance4] = useState(0)

  const handleType1Change = (event) => {
    setType1(event.target.value);
  };
  const handleType2Change = (event) => {
    setType2(event.target.value);
  }
  const handleType3Change = (event) => {
    setType3(event.target.value);
  }
  const handleType4Change = (event) => {
    setType4(event.target.value);
  }
  const handleDistance1Change = (event) => {
    setDistance1(event.target.value);
  };
  const handleDistance2Change = (event) => {
    setDistance2(event.target.value);
  }
  const handleDistance3Change = (event) => {
    setDistance3(event.target.value);
  }
  const handleDistance4Change = (event) => {
    setDistance4(event.target.value);
  }


  return (
    <>
      <div className="school-details-wrapper">
        <fieldset>
        <legend className="school-details-header">
          Schools applied for (Should be mentioned according to the preference
          order)
        </legend>
        <div className="school-details-container">
          <div className="school-details-row">
            <label className="school-label">Preference 1: </label>
            <input
              type="text"
              id="school1"
              placeholder="Enter 1st preferred school"
              value={school1}
              onChange={(e) => setSchool1(e.target.value)}
              required
            />
            <select value={type1} onChange={handleType1Change}>
              <option value="">Category of school</option>
              <option value="national">National</option>
              <option value="provincial">Provincial</option>
            </select>
            <select value={distance1} onChange={handleDistance1Change}>
              <option value="">Approx. distance</option>
              <option value="distance1">0-5 km</option>
              <option value="distance2">0-10 km</option>
              <option value="distance3">0-20 km</option>
              <option value="distance4">over 20 km</option>
            </select>
          </div>

          <div className="school-details-row">
            <label className="school-label">Preference 2: </label>
            <input
              type="text"
              id="school2"
              placeholder="Enter 2nd preferred school"
              value={school2}
              onChange={(e) => setSchool2(e.target.value)}
              required
            />
            <select value={type2} onChange={handleType2Change}>
              <option value="">Category of school</option>
              <option value="national">National</option>
              <option value="provincial">Provincial</option>
            </select>
            <select value={distance2} onChange={handleDistance2Change}>
              <option value="">Approx. distance</option>
              <option value="distance1">0-5 km</option>
              <option value="distance2">0-10 km</option>
              <option value="distance3">0-20 km</option>
              <option value="distance4">over 20 km</option>
            </select>
          </div>

          <div className="school-details-row">
            <label className="school-label">Preference 3: </label>
            <input
              type="text"
              id="school3"
              placeholder="Enter 3rd preferred school"
              value={school3}
              onChange={(e) => setSchool3(e.target.value)}
              required
            />
            <select value={type3} onChange={handleType3Change}>
              <option value="">Category of school</option>
              <option value="national">National</option>
              <option value="provincial">Provincial</option>
            </select>
            <select value={distance3} onChange={handleDistance3Change}>
              <option value="">Approx. distance</option>
              <option value="distance1">0-5 km</option>
              <option value="distance2">0-10 km</option>
              <option value="distance3">0-20 km</option>
              <option value="distance4">over 20 km</option>
            </select>
          </div>

          <div className="school-details-row">
            <label className="school-label">Preference 4: </label>
            <input
              type="text"
              id="school4"
              placeholder="Enter 4th preferred school"
              value={school4}
              onChange={(e) => setSchool4(e.target.value)}
              required
            />
            <select value={type4} onChange={handleType4Change}>
              <option value="">Category of school</option>
              <option value="national">National</option>
              <option value="provincial">Provincial</option>
            </select>
            <select value={distance4} onChange={handleDistance4Change}>
              <option value="">Approx. distance</option>
              <option value="distance1">0-5 km</option>
              <option value="distance2">0-10 km</option>
              <option value="distance3">0-20 km</option>
              <option value="distance4">over 20 km</option>
            </select>
          </div>
        </div>
        </fieldset>
      </div>
    </>
  );
};
export default SchoolDetails;
