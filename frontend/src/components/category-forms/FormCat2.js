import { useState, useContext } from "react";
import "./FormCat.css";
import Modal from "../Modal";
import { MarksContext } from "../context/MarksContext";

export default function FormCat2() {
  const { updateMarks } = useContext(MarksContext);
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

  function handleWithAchievement() {
    setwithachievement(true);
    setwithoutachievement(false);
  }

  function handleWithoutAchievement() {
    setwithoutachievement(true);
    setwithachievement(false);
  }

  function handleWithActivity() {
    setwithactivity(true);
    setwithoutactivity(false);
  }

  function handleWithoutActivity() {
    setwithoutactivity(true);
    setwithactivity(false);
  }

  const calculateMarks = () => {
    let totalMarks2 = 0;

    totalMarks2 += classNumber * 2;

    if (withachievement) {
      totalMarks2 += 25;
    }

    if (withactivity) {
      totalMarks2 += 25;
    }

    if (withMembership) {
      totalMarks2 += 24;
    }

    setMarks(totalMarks2);
    handleMarksChange(true);
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
                type="number"
                id="classNumber"
                value={classNumber}
                onChange={(e) => setclassNumber(e.target.value)}
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
                Period spent in the school as a pupil:{" "}
              </label>
              <input
                type="number"
                id="fromGrade"
                placeholder="From Grade"
                value={fromGrade}
                onChange={(e) => setfromGrade(e.target.value)}
                required
                style={{
                  padding: "0.5em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginRight: "6px",
                }}
              />
              <input
                type="number"
                id="toGrade"
                placeholder="To Grade"
                value={toGrade}
                onChange={(e) => settoGrade(e.target.value)}
                required
                style={{
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
          </fieldset>
        </form>
      </div>

      <div className="form-display-marks" onClick={(e) => calculateMarks()}>
        <Modal
          buttonText={"View Marks"}
          bodyHeader={"Marks for category based on past pupils"}
          bodyText={marks.toString()}
        />
      </div>
    </>
  );
}
