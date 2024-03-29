import { useState, useContext } from "react";
import "./FormCat.css";
import Modal from "../Modal";
import { MarksContext } from "../context/MarksContext";
import Dialog from "../../components/Dialog";

export default function FormCat2() {
  const { updateMarks } = useContext(MarksContext);
  const { updateFinalMarks } = useContext(MarksContext);
  const [classNumber, setclassNumber] = useState("");
  const [fromGrade, setfromGrade] = useState("");
  const [toGrade, settoGrade] = useState("");
  const [withachievement, setwithachievement] = useState(false);
  const [withoutachievement, setwithoutachievement] = useState(false);
  const [withactivity, setwithactivity] = useState(false);
  const [withoutactivity, setwithoutactivity] = useState(false);
  const [withMembership, setwithMembership] = useState(false);
  const [withoutMembership, setwithoutMembership] = useState(false);
  const [marks, setMarks] = useState(0);
  const [moreCheckboxes, setMoreCheckboxes] = useState([]);
  const [gceOLText, setGceOLText] = useState(false);
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  const [showGceOLSection, setShowGceOLSection] = useState(false);
  const [gceALInput, setGceALInput] = useState("");
  const [activityCheckboxes, setActivityCheckboxes] = useState([]);
  const [showAdditionalActivities, setShowAdditionalActivities] =
    useState(false);
  const [additionalActivityCheckboxes, setAdditionalActivityCheckboxes] =
    useState([]);
  const [otherActivityCheckboxes, setotherActivityCheckboxes] = useState([]);
  const [societyActivityCheckboxes, setsocietyActivityCheckboxes] = useState(
    []
  );

  const [winningInput, setwinningInput] = useState("");
  const [membershipCheckboxes, setmembershipCheckboxes] = useState([]);
  const [postMembershipInput, setpostMembershipInput] = useState("");
  const [winningMembershipInput, setwinningMembershipInput] = useState("");
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(true);

  const handleMarksChange = (newValue) => {
    updateMarks("cat2", newValue);
  };

  function handleWithMembership() {
    setwithMembership(true);
    setwithoutMembership(false);
  }

  function handleWithoutMembership() {
    setwithoutMembership(true);
    setwithMembership(false);
  }

  const handlemembershipCheckboxChange = (index, event) => {
    const updatedCheckboxes = [...membershipCheckboxes];
    updatedCheckboxes[index] = event.target.checked;
    setmembershipCheckboxes(updatedCheckboxes);
  };

  const handleWithAchievement = (event) => {
    setwithachievement(event.target.checked);
    setwithoutachievement(false);
  };

  const handleWithoutAchievement = (event) => {
    setwithoutachievement(event.target.checked);
    setwithachievement(false);
    setMoreCheckboxes([]);
  };

  const handleMoreCheckboxChange = (index, event) => {
    const updatedCheckboxes = [...moreCheckboxes];
    updatedCheckboxes[index] = event.target.checked;
    setMoreCheckboxes(updatedCheckboxes);
  };

  const handleGceOLTextChange = (event) => {
    setError(false);
    setValidated(false);
    setGceOLText(!gceOLText);
    setShowGceOLSection(!showGceOLSection); // Show the G.C.E O/L section when the textbox is clicked
  };

  const handleGceALInputChange = (event) => {
    setGceALInput(event.target.value);
  };

  const handleWithActivity = (event) => {
    setwithactivity(event.target.checked);
    setwithoutactivity(false);
    setShowAdditionalActivities(event.target.checked);
    setAdditionalActivityCheckboxes([]);
    setActivityCheckboxes([]); // Reset the state of activity checkboxes
  };

  const handleWithoutActivity = (event) => {
    setwithoutactivity(event.target.checked);
    setwithactivity(false);
    setShowAdditionalActivities(false);
    setActivityCheckboxes([]); // Reset the state of activity checkboxes
  };

  const handleActivityCheckboxChange = (index, event) => {
    const updatedCheckboxes = [...activityCheckboxes];
    updatedCheckboxes[index] = event.target.checked;
    setActivityCheckboxes(updatedCheckboxes);
  };

  const handleAdditionalActivitiesCheckboxChange = (index, event) => {
    const updatedCheckboxes = [...additionalActivityCheckboxes];
    updatedCheckboxes[index] = event.target.checked;
    setAdditionalActivityCheckboxes(updatedCheckboxes);
  };

  const handleotherActivitiesCheckboxChange = (index, event) => {
    const updatedCheckboxes = [...otherActivityCheckboxes];
    updatedCheckboxes[index] = event.target.checked;
    setotherActivityCheckboxes(updatedCheckboxes);
  };

  const handlesocietyActivitiesCheckboxChange = (index, event) => {
    const updatedCheckboxes = [...societyActivityCheckboxes];
    updatedCheckboxes[index] = event.target.checked;
    setsocietyActivityCheckboxes(updatedCheckboxes);
  };

  const handlewinningInputChange = (event) => {
    setwinningInput(event.target.value);
  };

  const handlepostMembershipInputChange = (event) => {
    setpostMembershipInput(event.target.value);
  };

  const handlewinningMembershipInputChange = (event) => {
    setwinningMembershipInput(event.target.value);
  };

  const handleCloseModal = () => {
    setError(false);
  };

  const calculateMarks = () => {
    if (gceOLText) {
      if (input1Value + input2Value + input3Value > 9) {
        setError(true);
        setValidated(false);
        return;
      }
    }
    setValidated(true);
    let totalMarks2 = 0;
    let sMarks = 0;
    let bMarks = 0;
    let aMarks = 0;
    let activity = 0;
    let other = 0;
    let society = 0;

    if (classNumber <= 13) {
      totalMarks2 += classNumber * 2;
    }
    if (classNumber > 13) {
      totalMarks2 += 26;
    }

    if (withachievement) {
      if (moreCheckboxes[0]) {
        totalMarks2 += 3;
      }
      if (moreCheckboxes[1]) {
        if (gceOLText) {
          totalMarks2 += 2;
        }
        if (input1Value) {
          sMarks = input1Value * 0.2;
          if (sMarks > 2) {
            sMarks = 2;
          }
          totalMarks2 += sMarks;
        }
        if (input2Value) {
          bMarks = input2Value * 0.5;
          if (bMarks > 4) {
            bMarks = 4;
          }
          totalMarks2 += bMarks;
        }
        if (input3Value) {
          aMarks = input3Value * 1;
          if (aMarks > 8) {
            aMarks = 8;
          }
          totalMarks2 += aMarks;
        }
      }
      if (moreCheckboxes[2]) {
        if (gceALInput === "Input4") {
          totalMarks2 += 4;
        }
        if (gceALInput === "Input5") {
          totalMarks2 += 2;
        }
        if (gceALInput === "Input6") {
          totalMarks2 += 1;
        }
        if (gceALInput === "Input7") {
          totalMarks2 += 8;
        }
        if (gceALInput === "Input8") {
          totalMarks2 += 12;
        }
      }
    }

    if (withactivity) {
      if (activityCheckboxes[0]) {
        if (additionalActivityCheckboxes[0]) {
          activity += 4;
        }
        if (additionalActivityCheckboxes[1]) {
          activity += 3;
        }
        if (additionalActivityCheckboxes[2]) {
          activity += 2;
        }
        if (additionalActivityCheckboxes[3]) {
          activity += 1;
        }
        if (additionalActivityCheckboxes[4]) {
          activity += 1;
        }
        if (activity > 4) {
          totalMarks2 += 4;
        }
        if (activity <= 4) {
          totalMarks2 += activity;
        }
      }
      if (activityCheckboxes[1]) {
        if (otherActivityCheckboxes[0]) {
          other += 3;
        }
        if (otherActivityCheckboxes[1]) {
          other += 3;
        }
        if (otherActivityCheckboxes[2]) {
          other += 3;
        }
        if (otherActivityCheckboxes[3]) {
          other += 2;
        }
        if (otherActivityCheckboxes[4]) {
          other += 1;
        }
        if (other > 6) {
          totalMarks2 += 6;
        }
        if (other <= 6) {
          totalMarks2 += other;
        }
      }
      if (activityCheckboxes[2]) {
        if (societyActivityCheckboxes[0]) {
          society += 2;
        }
        if (societyActivityCheckboxes[1]) {
          society += 1;
        }
        if (society > 2) {
          totalMarks2 += 2;
        }
        if (society <= 2) {
          totalMarks2 += society;
        }
      }
      if (activityCheckboxes[3]) {
        if (winningInput === "winning1") {
          totalMarks2 += 5;
        }
        if (winningInput === "winning2") {
          totalMarks2 += 6;
        }
        if (winningInput === "winning3") {
          totalMarks2 += 7;
        }
        if (winningInput === "winning4") {
          totalMarks2 += 8;
        }
        if (winningInput === "winning5") {
          totalMarks2 += 9;
        }
        if (winningInput === "winning6") {
          totalMarks2 += 10;
        }
      }
      if (activityCheckboxes[4]) {
        totalMarks2 += 3;
      }
    }

    if (withMembership) {
      if (membershipCheckboxes[0]) {
        totalMarks2 += 10;
      }
      if (membershipCheckboxes[1]) {
        if (postMembershipInput === "postMembership1") {
          totalMarks2 += 4;
        }
        if (postMembershipInput === "postMembership2") {
          totalMarks2 += 3;
        }
        if (postMembershipInput === "postMembership3") {
          totalMarks2 += 2;
        }
      }
      if (membershipCheckboxes[2]) {
        if (winningMembershipInput === "winningMembership1") {
          totalMarks2 += 4;
        }
        if (winningMembershipInput === "winningMembership2") {
          totalMarks2 += 3;
        }
        if (winningMembershipInput === "winningMembership3") {
          totalMarks2 += 2;
        }
        if (winningMembershipInput === "winningMembership4") {
          totalMarks2 += 1;
        }
        if (winningMembershipInput === "winningMembership5") {
          totalMarks2 += 0.5;
        }
        if (winningMembershipInput === "winningMembership6") {
          totalMarks2 += 4;
        }
      }
      if (membershipCheckboxes[3]) {
        totalMarks2 += 4;
      }
      if (membershipCheckboxes[4]) {
        totalMarks2 += 2;
      }
    }

    setMarks(totalMarks2);
    handleMarksChange(true);
    updateFinalMarks("Based on Children of past pupils", totalMarks2);
  };

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <div className="form-religion">
              <label className="form-label">
                No of classes studied in school:{" "}
              </label>
              <input
                type="text"
                id="classNumber"
                value={classNumber}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/\D+/g, "");
                  const parsedValue = parseInt(sanitizedValue, 10);
                  const clampedValue = Math.min(Math.max(parsedValue, 1), 13);
                  setclassNumber(clampedValue);
                }}
                required
                style={{
                  maxWidth: "150px",
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Period spent in the school as a pupil:{" "}
              </label>
              <input
                type="text"
                id="fromGrade"
                placeholder="From Grade"
                value={fromGrade}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/\D+/g, "");
                  const parsedValue = parseInt(sanitizedValue, 10);
                  const clampedValue = Math.min(Math.max(parsedValue, 1), 13);
                  setfromGrade(clampedValue);
                }}
                required
                style={{
                  maxWidth: "150px",
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginRight: "6px",
                }}
              />
              <input
                type="text"
                id="toGrade"
                placeholder="To Grade"
                value={toGrade}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/\D+/g, "");
                  const parsedValue = parseInt(sanitizedValue, 10);
                  const clampedValue = Math.min(Math.max(parsedValue, 1), 13);
                  settoGrade(clampedValue);
                }}
                required
                style={{
                  maxWidth: "150px",
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>

            <div className="form-sex">
              <label className="form-label">
                Educational achievements gained during the period of schooling:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withachievement}
                  onChange={handleWithAchievement}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutachievement}
                  onChange={handleWithoutAchievement}
                />
                No
              </label>
            </div>

            {withachievement && (
              <div
                className="form-medium-selector"
                style={{ marginTop: "-10px" }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={moreCheckboxes[0] || false}
                    onChange={(e) => handleMoreCheckboxChange(0, e)}
                  />
                  <label>Grade 5 Scholarship</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    checked={moreCheckboxes[1] || false}
                    onChange={(e) => handleMoreCheckboxChange(1, e)}
                  />
                  <label>G.C.E O/L</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    checked={moreCheckboxes[2] || false}
                    onChange={(e) => handleMoreCheckboxChange(2, e)}
                  />
                  <label>G.C.E A/L</label>
                </div>

                {moreCheckboxes[1] && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#a8a2a2",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <label style={{ marginRight: "10px" }}>
                        Passed 6 subjects
                      </label>
                      <input
                        type="checkbox"
                        // style={{ marginLeft: "10px" }}
                        checked={gceOLText}
                        onChange={handleGceOLTextChange}
                      />
                    </div>

                    {showGceOLSection && (
                      <>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label style={{ marginRight: "10px" }}>
                            Number of S passes:
                          </label>
                          <input
                            type="text"
                            value={input1Value}
                            onChange={(e) => {
                              const sanitizedValue = e.target.value.replace(
                                /\D+/g,
                                ""
                              );
                              const parsedValue = parseInt(sanitizedValue, 10);
                              const clampedValue = Math.min(
                                Math.max(parsedValue, 0),
                                9
                              );
                              setInput1Value(clampedValue);
                            }}
                          />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label style={{ marginRight: "10px" }}>
                            Number of C/B passes:
                          </label>
                          <input
                            type="text"
                            value={input2Value}
                            onChange={(e) => {
                              const sanitizedValue = e.target.value.replace(
                                /\D+/g,
                                ""
                              );
                              const parsedValue = parseInt(sanitizedValue, 10);
                              const clampedValue = Math.min(
                                Math.max(parsedValue, 0),
                                9
                              );
                              setInput2Value(clampedValue);
                            }}
                          />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label style={{ marginRight: "10px" }}>
                            Number of D/A passes:
                          </label>
                          <input
                            type="text"
                            value={input3Value}
                            onChange={(e) => {
                              const sanitizedValue = e.target.value.replace(
                                /\D+/g,
                                ""
                              );
                              const parsedValue = parseInt(sanitizedValue, 10);
                              const clampedValue = Math.min(
                                Math.max(parsedValue, 0),
                                9
                              );
                              setInput3Value(clampedValue);
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {moreCheckboxes[2] && (
              <div
                className="form-medium-selector"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#a8a2a2",
                  alignItems: "end",
                  marginRight: "7.5rem",
                }}
              >
                <label>
                  <input
                    type="radio"
                    name="gceALInput"
                    value="Input4"
                    checked={gceALInput === "Input4"}
                    onChange={handleGceALInputChange}
                  />
                  Passed 3 subjects
                </label>

                <label>
                  <input
                    type="radio"
                    name="gceALInput"
                    value="Input5"
                    checked={gceALInput === "Input5"}
                    onChange={handleGceALInputChange}
                  />
                  Passed 2 subjects
                </label>

                <label>
                  <input
                    type="radio"
                    name="gceALInput"
                    value="Input6"
                    checked={gceALInput === "Input6"}
                    onChange={handleGceALInputChange}
                  />
                  Passed 1 subject
                </label>

                <label>
                  <input
                    type="radio"
                    name="gceALInput"
                    value="Input7"
                    checked={gceALInput === "Input7"}
                    onChange={handleGceALInputChange}
                  />
                  Selected to the university
                </label>

                <label>
                  <input
                    type="radio"
                    name="gceALInput"
                    value="Input8"
                    checked={gceALInput === "Input8"}
                    onChange={handleGceALInputChange}
                  />
                  Entered to the university
                </label>
              </div>
            )}

            <div className="form-sex">
              <label className="form-label">
                Achievements gained in co-curricular activities during the
                period of schooling:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withactivity}
                  onChange={handleWithActivity}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutactivity}
                  onChange={handleWithoutActivity}
                />
                No
              </label>
            </div>

            {withactivity && (
              <div
                className="form-medium-selector"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={activityCheckboxes[0] || false}
                    onChange={(e) => handleActivityCheckboxChange(0, e)}
                  />
                  <label>Extracurricular activities</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    checked={activityCheckboxes[1] || false}
                    onChange={(e) => handleActivityCheckboxChange(1, e)}
                  />

                  <label>Other group activities</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={activityCheckboxes[2] || false}
                    onChange={(e) => handleActivityCheckboxChange(2, e)}
                  />
                  <label>Holding office in union companies</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    checked={activityCheckboxes[3] || false}
                    onChange={(e) => handleActivityCheckboxChange(3, e)}
                  />
                  <label>Sports Achievements/Dance/Music/Drama</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    checked={activityCheckboxes[4] || false}
                    onChange={(e) => handleActivityCheckboxChange(4, e)}
                  />
                  <label>New designs/ School level projects</label>
                </div>

                {activityCheckboxes[0] && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#a8a2a2",
                    }}
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={additionalActivityCheckboxes[0] || false}
                        onChange={(e) =>
                          handleAdditionalActivitiesCheckboxChange(0, e)
                        }
                      />
                      <label>Head prefect</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        checked={additionalActivityCheckboxes[1] || false}
                        onChange={(e) =>
                          handleAdditionalActivitiesCheckboxChange(1, e)
                        }
                      />
                      <label>Vice Head Prefect/ Sports Captain</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        checked={additionalActivityCheckboxes[2] || false}
                        onChange={(e) =>
                          handleAdditionalActivitiesCheckboxChange(2, e)
                        }
                      />
                      <label>Prefect (senior)</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        checked={additionalActivityCheckboxes[3] || false}
                        onChange={(e) =>
                          handleAdditionalActivitiesCheckboxChange(3, e)
                        }
                      />
                      <label>Prefect (junior)</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        checked={additionalActivityCheckboxes[4] || false}
                        onChange={(e) =>
                          handleAdditionalActivitiesCheckboxChange(4, e)
                        }
                      />
                      <label>Team sports captain</label>
                    </div>
                  </div>
                )}

                {activityCheckboxes[1] && (
                  <div style={{ color: "#a8a2a2" }}>
                    <p>
                      Cadet/Scout/Instrumentalist/First
                      Aid/Environmental/Debating/Knowledge/Media
                    </p>
                    <div>
                      <input
                        type="checkbox"
                        checked={otherActivityCheckboxes[0] || false}
                        onChange={(e) =>
                          handleotherActivitiesCheckboxChange(0, e)
                        }
                      />
                      <label>Presidential Scout</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        checked={otherActivityCheckboxes[1] || false}
                        onChange={(e) =>
                          handleotherActivitiesCheckboxChange(1, e)
                        }
                      />
                      <label>Above the rank of Cadet Sergeant</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={otherActivityCheckboxes[2] || false}
                        onChange={(e) =>
                          handleotherActivitiesCheckboxChange(2, e)
                        }
                      />
                      <label>Captain</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={otherActivityCheckboxes[3] || false}
                        onChange={(e) =>
                          handleotherActivitiesCheckboxChange(3, e)
                        }
                      />
                      <label>Vice Captain</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        checked={otherActivityCheckboxes[4] || false}
                        onChange={(e) =>
                          handleotherActivitiesCheckboxChange(4, e)
                        }
                      />
                      <label>Member</label>
                    </div>
                  </div>
                )}

                {activityCheckboxes[2] && (
                  <div style={{ color: "#a8a2a2" }}>
                    <div>
                      <input
                        type="checkbox"
                        checked={societyActivityCheckboxes[0] || false}
                        onChange={(e) =>
                          handlesocietyActivitiesCheckboxChange(0, e)
                        }
                      />
                      <label>President/ Secretary/ Treasurer</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        checked={societyActivityCheckboxes[1] || false}
                        onChange={(e) =>
                          handlesocietyActivitiesCheckboxChange(1, e)
                        }
                      />
                      <label>Committee member</label>
                    </div>
                  </div>
                )}

                {activityCheckboxes[3] && (
                  <div style={{ color: "#a8a2a2" }}>
                    <label>
                      <input
                        type="radio"
                        name="winningInput"
                        value="winning1"
                        checked={winningInput === "winning1"}
                        onChange={handlewinningInputChange}
                      />
                      School Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningLInput"
                        value="winning2"
                        checked={winningInput === "winning2"}
                        onChange={handlewinningInputChange}
                      />
                      Division Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningInput"
                        value="winning3"
                        checked={winningInput === "winning3"}
                        onChange={handlewinningInputChange}
                      />
                      Zonal/District Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningInput"
                        value="winning4"
                        checked={winningInput === "winning4"}
                        onChange={handlewinningInputChange}
                      />
                      Provincial Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningInput"
                        value="winning5"
                        checked={winningInput === "winning5"}
                        onChange={handlewinningInputChange}
                      />
                      All Sri Lanka Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningInput"
                        value="winning6"
                        checked={winningInput === "winning6"}
                        onChange={handlewinningInputChange}
                      />
                      Foreign Matches/Colors/Leaders
                    </label>
                    <br />
                  </div>
                )}
              </div>
            )}

            <div className="form-sex">
              <label className="form-label">
                Membership in Past Pupil Associations, educational achievements
                after period of schooling and various types of assistance
                provided for the development of the school certified by the
                Principal:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withMembership}
                  onChange={handleWithMembership}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutMembership}
                  onChange={handleWithoutMembership}
                />
                No
              </label>
            </div>

            {withMembership && (
              <div
                className="form-medium-selector"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={membershipCheckboxes[0] || false}
                    onChange={(e) => handlemembershipCheckboxChange(0, e)}
                  />

                  <label>Membership of School Past Pupils Association</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={membershipCheckboxes[1] || false}
                    onChange={(e) => handlemembershipCheckboxChange(1, e)}
                  />

                  <label>School Past Pupils Association Posts</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={membershipCheckboxes[2] || false}
                    onChange={(e) => handlemembershipCheckboxChange(2, e)}
                  />

                  <label>Achievements After School</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={membershipCheckboxes[3] || false}
                    onChange={(e) => handlemembershipCheckboxChange(3, e)}
                  />

                  <label>Prefer for Donation</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={membershipCheckboxes[4] || false}
                    onChange={(e) => handlemembershipCheckboxChange(4, e)}
                  />
                  <label>Labor Contribution/Special Contribution</label>
                </div>

                {membershipCheckboxes[1] && (
                  <div style={{ color: "#a8a2a2" }}>
                    <label>
                      <input
                        type="radio"
                        name="postMembershipInput"
                        value="postMembership1"
                        checked={postMembershipInput === "postMembership1"}
                        onChange={handlepostMembershipInputChange}
                      />
                      Secretary/Treasurer/Vice President/Additional President
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="postMembershipInput"
                        value="postMembership2"
                        checked={postMembershipInput === "postMembership2"}
                        onChange={handlepostMembershipInputChange}
                      />
                      Vice Secretary/Vice Treasurer
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="postMembershipInput"
                        value="postMembership3"
                        checked={postMembershipInput === "postMembership3"}
                        onChange={handlepostMembershipInputChange}
                      />
                      Committee Member
                    </label>
                    <br />
                  </div>
                )}

                {membershipCheckboxes[2] && (
                  <div style={{ color: "#a8a2a2" }}>
                    <label>
                      <input
                        type="radio"
                        name="winningMembershipInput"
                        value="winningMembership1"
                        checked={
                          winningMembershipInput === "winningMembership1"
                        }
                        onChange={handlewinningMembershipInputChange}
                      />
                      Ph.D
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningMembershipInput"
                        value="winningMembership2"
                        checked={
                          winningMembershipInput === "winningMembership2"
                        }
                        onChange={handlewinningMembershipInputChange}
                      />
                      Post Graduate/Diploma in Masters
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningMembershipInput"
                        value="winningMembership3"
                        checked={
                          winningMembershipInput === "winningMembership3"
                        }
                        onChange={handlewinningMembershipInputChange}
                      />
                      Degree from Government/Government Registered Institutions
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningMembershipInput"
                        value="winningMembership4"
                        checked={
                          winningMembershipInput === "winningMembership4"
                        }
                        onChange={handlewinningMembershipInputChange}
                      />
                      Diploma Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningMembershipInput"
                        value="winningMembership5"
                        checked={
                          winningMembershipInput === "winningMembership5"
                        }
                        onChange={handlewinningMembershipInputChange}
                      />
                      Certicate Level
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="winningMembershipInput"
                        value="winningMembership6"
                        checked={
                          winningMembershipInput === "winningMembership6"
                        }
                        onChange={handlewinningMembershipInputChange}
                      />
                      Obtained Patents
                    </label>
                    <br />
                  </div>
                )}
              </div>
            )}
          </fieldset>
        </form>
      </div>
      {error ? (
        <Dialog
          toOpen={true}
          title={"Error"}
          body={"Error in OL passed subject count maximum subjects must 9"}
          onClose={handleCloseModal}
        ></Dialog>
      ) : null}

      <div className="form-display-marks" onClick={(e) => calculateMarks()}>
        {!error && (
          <Modal
            buttonText={"View Marks"}
            bodyHeader={"Marks for category based on past pupils"}
            bodyText={marks.toString()}
          />
        )}
      </div>
    </>
  );
}
