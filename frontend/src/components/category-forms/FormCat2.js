import { useState } from "react";

export default function FormCat2() {
  const [classNumber, setclassNumber] = useState("");
  const [fromGrade, setfromGrade] = useState("");
  const [toGrade, settoGrade] = useState("");
  const [achievement, setachievement] = useState("");
  const [activity, setactivity] = useState("");
  const [withMembership, setwithMembership] = useState(false);
  const [withoutMembership, setwithoutMembership] = useState(false);

  function handleWithMembership() {
    setwithMembership(true);
    setwithoutMembership(false);
  }

  function handleWithoutMembership() {
    setwithoutMembership(true);
    setwithMembership(false);
  }

  return (
    <>
      <div className="form-container">
        <form>
          <fieldset>
            <legend>Children of Past Pupils</legend>

            <div className="form-religion">
              <label className="form-label">
                No of classes studied in school:{" "}
              </label>
              <input
                type="text"
                id="classNumber"
                value={classNumber}
                onChange={(e) => setclassNumber(e.target.value)}
                required
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
                onChange={(e) => setfromGrade(e.target.value)}
                required
              />
              <input
                type="text"
                id="toGrade"
                placeholder="To Grade"
                value={toGrade}
                onChange={(e) => settoGrade(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Educational achievements gained during the period of schooling:{" "}
              </label>
              <input
                type="text"
                id="achievement"
                value={achievement}
                onChange={(e) => setachievement(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Achievements gained in co-curricular activities during the
                period of schooling:{" "}
              </label>
              <input
                type="text"
                id="activity"
                value={activity}
                onChange={(e) => setactivity(e.target.value)}
                required
              />
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
    </>
  );
}
