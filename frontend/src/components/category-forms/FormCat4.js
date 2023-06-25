import { useState, useContext } from "react";
import Modal from "../Modal";
import "./FormCat.css";
import { MarksContext } from "../context/MarksContext";

export default function FormCat4() {
  const { updateMarks } = useContext(MarksContext);
  const [post, setpost] = useState("");
  const [institution, setinstitution] = useState("");
  const [periodofservice, setperiodofservice] = useState("");
  const [withDifficultSchool, setwithDifficultSchool] = useState(false);
  const [withoutDifficultSchool, setwithoutDifficultSchool] = useState(false);
  const [difficultSchool, setdifficultSchool] = useState("");
  const [earlydifficultSchool, setearlydifficultSchool] = useState("");
  const [leave2020, setleave2020] = useState("");
  const [leave2019, setleave2019] = useState("");
  const [leave2018, setleave2018] = useState("");
  const [leave2017, setleave2017] = useState("");
  const [leave2016, setleave2016] = useState("");
  const [servicePeriod, setservicePeriod] = useState("");
  const [distance, setdistance] = useState("");
  const [withForwardedDoc, setwithForwardedDoc] = useState(false);
  const [withoutForwardedDoc, setwithoutForwardedDoc] = useState(false);
  const [currentDistance, setcurrentDistance] = useState("");
  const [marks, setMarks] = useState(0);

  const handleMarksChange = (newValue) => {
    updateMarks("cat4", newValue);
  };

  function handleWithForwardedDoc() {
    setwithForwardedDoc(true);
    setwithoutForwardedDoc(false);
  }

  function handleWithDifficultSchool() {
    setwithDifficultSchool(true);
    setwithoutDifficultSchool(false);
  }

  function handleWithoutForwardedDoc() {
    setwithoutForwardedDoc(true);
    setwithForwardedDoc(false);
  }

  function handleWithoutDifficultSchool() {
    setwithoutDifficultSchool(true);
    setwithDifficultSchool(false);
  }

  const calculateMarks = () => {
    let totalMarks4 = 0;
    let leavesmark = 0;

    if (periodofservice >= 20) {
      totalMarks4 += 20;
    } else if (0 < periodofservice < 20) {
      totalMarks4 += periodofservice * 1;
    }

    if (withDifficultSchool) {
      totalMarks4 += difficultSchool * 5;
    } else if (withoutDifficultSchool) {
      totalMarks4 += earlydifficultSchool * 3;
    }

    if (0 < servicePeriod && servicePeriod < 3) {
      totalMarks4 += 5;
    } else if (servicePeriod >= 3) {
      totalMarks4 += 10;
    }

    leavesmark += Math.floor(
      (+leave2016 + +leave2017 + +leave2018 + +leave2019 + +leave2020) / 20
    );

    if (leavesmark >= 5) {
      totalMarks4 += 10;
    } else if (leavesmark > 0) {
      totalMarks4 += leavesmark * 2;
    }

    if (withForwardedDoc) {
      if (distance <= 1) {
        totalMarks4 += 10;
      } else if (1 < distance && distance <= 3) {
        totalMarks4 += 8;
      } else if (3 < distance && distance <= 5) {
        totalMarks4 += 6;
      } else {
        totalMarks4 += 4;
      }
    }

    if (currentDistance >= 100) {
      totalMarks4 += 25;
    } else if (70 <= currentDistance && currentDistance < 100) {
      totalMarks4 += 20;
    } else if (40 <= currentDistance && currentDistance < 70) {
      totalMarks4 += 15;
    } else if (20 <= currentDistance && currentDistance < 40) {
      totalMarks4 += 10;
    } else if (0 < currentDistance) {
      totalMarks4 += 5;
    }

    setMarks(totalMarks4);
    handleMarksChange(false);
  };

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <div className="label-container">
              <label className="form-label">
                Post held as a permanent employee in the relevant institutions
                and Period of service:{" "}
              </label>
              <div className="service-details">
                <input
                  type="text"
                  id="post"
                  placeholder="Post"
                  value={post}
                  onChange={(e) => setpost(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="institution"
                  placeholder="Institution"
                  value={institution}
                  onChange={(e) => setinstitution(e.target.value)}
                  required
                />
                <input
                  type="number"
                  id="periodofservice"
                  placeholder="Period of Service in Complete Years"
                  value={periodofservice}
                  onChange={(e) => setperiodofservice(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    marginBottom: "12px",
                  }}
                />
              </div>
            </div>

            <div className="label-container">
              <label className="form-label">
                Serving presently in a difficult school:{" "}
              </label>
              <div className="service-details">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={withDifficultSchool}
                    onChange={handleWithDifficultSchool}
                  />
                  <span>Yes</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={withoutDifficultSchool}
                    onChange={handleWithoutDifficultSchool}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {withDifficultSchool && (
              <div className="label-container">
                <>
                  <label className="form-label">
                    Period of difficult school service:{" "}
                  </label>
                  <div className="years-container">
                    <input
                      type="number"
                      id="difficultSchool"
                      value={difficultSchool}
                      onChange={(e) => setdifficultSchool(e.target.value)}
                      required
                      style={{
                        padding: "0.5em",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "16px",
                        width: "40%",
                        marginBottom: "12px",
                        marginTop: "12px",
                      }}
                    />
                  </div>
                </>
              </div>
            )}
            {withoutDifficultSchool && (
              <div className="label-container">
                {
                  <>
                    <label className="form-label">
                      Period of difficult school service:{" "}
                    </label>
                    <div className="years-container">
                      <input
                        type="text"
                        id="earlydifficultSchool"
                        value={earlydifficultSchool}
                        onChange={(e) =>
                          setearlydifficultSchool(e.target.value)
                        }
                        required
                        style={{
                          padding: "0.5em",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          fontSize: "16px",
                          width: "40%",
                          marginBottom: "12px",
                          marginTop: "12px",
                        }}
                      />
                    </div>
                  </>
                }
              </div>
            )}

            <div className="label-container">
              <label className="form-label">Un-utilized Leave: </label>
              <div className="years-container">
                <input
                  type="number"
                  id="leave2020"
                  placeholder="2020"
                  value={leave2020}
                  onChange={(e) => setleave2020(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    border: "1px solid #ccc",
                    marginBottom: "4px",
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "40%",
                  }}
                />
                <input
                  type="number"
                  id="leave2019"
                  placeholder="2019"
                  value={leave2019}
                  onChange={(e) => setleave2019(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    marginBottom: "4px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "40%",
                  }}
                />
                <input
                  type="number"
                  id="leave2018"
                  placeholder="2018"
                  value={leave2018}
                  onChange={(e) => setleave2018(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    marginBottom: "4px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "40%",
                  }}
                />
                <input
                  type="number"
                  id="leave2017"
                  placeholder="2017"
                  value={leave2017}
                  onChange={(e) => setleave2017(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    marginBottom: "4px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "40%",
                  }}
                />
                <input
                  type="number"
                  id="leave2016"
                  placeholder="2016"
                  value={leave2016}
                  onChange={(e) => setleave2016(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    marginBottom: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "40%",
                  }}
                />
              </div>
            </div>

            <div className="label-container">
              <label className="form-label">
                If serving in the school applied, period of service in said
                school:{" "}
              </label>
              <div className="service-details">
                <input
                  type="number"
                  id="servicePeriod"
                  value={servicePeriod}
                  onChange={(e) => setservicePeriod(e.target.value)}
                  required
                  style={{
                    padding: "0.5em",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "16px",
                    width: "40%",
                    marginBottom: "12px",
                    marginTop: "12px",
                  }}
                />
              </div>
            </div>

            <div className="label-container">
              <label className="form-label">
                Main document forwarded relevant to the place of residence:{" "}
              </label>
              <div className="service-details">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={withForwardedDoc}
                    onChange={handleWithForwardedDoc}
                  />
                  <span>Yes</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={withoutForwardedDoc}
                    onChange={handleWithoutForwardedDoc}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="label-container">
              <label className="form-label">
                Distance from permanent place of residence to the school
                applied:{" "}
              </label>

              <div className="service-details">
                <input
                  type="text"
                  id="distance"
                  placeholder="km"
                  value={distance}
                  onChange={(e) => setdistance(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="label-container">
              <label className="form-label">
                Distance from present place of work to the school applied:{" "}
              </label>
              <div className="service-details">
                <input
                  type="text"
                  id="currentDistance"
                  placeholder="km"
                  value={currentDistance}
                  onChange={(e) => setcurrentDistance(e.target.value)}
                  required
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="form-display-marks" onClick={(e) => calculateMarks()}>
        <Modal
          buttonText={"View Marks"}
          bodyHeader={
            "Marks for category based on Children of staff in education institutions involved in school education"
          }
          bodyText={marks.toString()}
        />
      </div>
    </>
  );
}
