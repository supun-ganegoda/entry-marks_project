import { useState } from "react";
import Alert from "@mui/material/Alert";
import "./FormCat.css";
import Modal from "../Modal";
import { useSchoolCount } from "../context/SchoolCountContext";

export default function FormCat1() {
  const schoolNumber = useSchoolCount(); //school count from the home to selected school
  //console.log(schoolCount);
  const [applicantNumber, setapplicantNumber] = useState("");
  const [spouseNumber, setspouseNumber] = useState("");
  const [guardianNumber, setguardianNumber] = useState("");
  const [withMainDoc, setwithMainDoc] = useState(false);
  const [withoutMainDoc, setwithoutMainDoc] = useState(false);
  const [withAdditionalDoc, setwithAdditionalDoc] = useState(false);
  const [withoutAdditionalDoc, setwithoutAdditionalDoc] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [years, setYears] = useState("");
  const [withSecondDoc, setwithSecondDoc] = useState(false);
  const [withoutSecondDoc, setwithoutSecondDoc] = useState(false);
  const [withThirdDoc, setwithThirdDoc] = useState(false);
  const [withoutThirdDoc, setwithoutThirdDoc] = useState(false);
  const [marks, setMarks] = useState(0);

  function handleWithMainCheckboxChange() {
    setwithMainDoc(true);
    setwithoutMainDoc(false);
  }

  function handleWithoutMainCheckboxChange() {
    setwithoutMainDoc(true);
    setwithMainDoc(false);
  }

  function handleWithAdditionalCheckboxChange() {
    setwithAdditionalDoc(true);
    setwithoutAdditionalDoc(false);
  }

  function handleWithoutAdditionalCheckboxChange() {
    setwithoutAdditionalDoc(true);
    setwithAdditionalDoc(false);
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleYearsChange = (event) => {
    setYears(event.target.value);
  };

  function handleWithSecondCheckboxChange() {
    setwithSecondDoc(true);
    setwithoutSecondDoc(false);
  }

  function handleWithoutSecondCheckboxChange() {
    setwithoutSecondDoc(true);
    setwithSecondDoc(false);
  }

  function handleWithThirdCheckboxChange() {
    setwithThirdDoc(true);
    setwithoutThirdDoc(false);
  }

  function handleWithoutThirdCheckboxChange() {
    setwithoutThirdDoc(true);
    setwithThirdDoc(false);
  }

  const calculateMarks = () => {
    let totalMarks = 0;

    if (withMainDoc) {
      if (selectedOption === "option1") {
        if (years === "5") {
          totalMarks += 20;
        } else if (years === "4") {
          totalMarks += 16;
        } else if (years === "3") {
          totalMarks += 12;
        } else if (years === "2") {
          totalMarks += 8;
        } else if (years === "1") {
          totalMarks += 2;
        } else if (years === "6") {
          totalMarks += 4;
        } else {
          totalMarks += 1;
        }
      } else if (selectedOption === "option2") {
        totalMarks += 15;
      } else if (years === "4") {
        totalMarks += 12;
      } else if (years === "3") {
        totalMarks += 9;
      } else if (years === "2") {
        totalMarks += 6;
      } else if (years === "1") {
        totalMarks += 1.5;
      } else if (years === "6") {
        totalMarks += 3;
      } else {
        totalMarks += 0.75;
      }
    } else if (selectedOption === "option3" || selectedOption === "option4") {
      if (years === "5") {
        totalMarks += 10;
      } else if (years === "4") {
        totalMarks += 8;
      } else if (years === "3") {
        totalMarks += 6;
      } else if (years === "2") {
        totalMarks += 4;
      } else if (years === "1") {
        totalMarks += 1;
      } else if (years === "6") {
        totalMarks += 2;
      } else {
        totalMarks += 0.5;
      }
    } else {
      if (years === "5") {
        totalMarks += 5;
      } else if (years === "4") {
        totalMarks += 4;
      } else if (years === "3") {
        totalMarks += 3;
      } else if (years === "2") {
        totalMarks += 2;
      } else if (years === "1") {
        totalMarks += 0.5;
      } else if (years === "6") {
        totalMarks += 1;
      } else {
        totalMarks += 0.25;
      }
      if (withAdditionalDoc) {
        totalMarks += 5;
      }
      if (applicantNumber >= "5" || guardianNumber >= "5") {
        if (spouseNumber >= "5" || guardianNumber >= "5") {
          totalMarks += 25;
        } else if (spouseNumber >= "4") {
          totalMarks += 22.5;
        } else if (spouseNumber >= "3") {
          totalMarks += 20;
        } else if (spouseNumber >= "2") {
          totalMarks += 17.5;
        } else if (spouseNumber >= "1") {
          totalMarks += 15;
        } else {
          totalMarks += 12.5;
        }
      }
    }
    if (50 - schoolNumber[0] * 5 > 0) {
      totalMarks += 50 - schoolNumber[0] * 5;
    }
    setMarks(totalMarks);
  };

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <legend>
              Children of residents in close proximity to the school
            </legend>
            <div className="form-sex">
              <label className="form-label">
                Main document in proof of place of living:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withMainDoc}
                  onChange={handleWithMainCheckboxChange}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutMainDoc}
                  onChange={handleWithoutMainCheckboxChange}
                />
                No
              </label>
            </div>
            <>
              {withMainDoc && (
                <div>
                  {
                    <div className="yearSelector">
                      <label>Year: </label>
                      <select value={years} onChange={handleYearsChange}>
                        <option value="">select the year</option>
                        <option value="5">5 years or more</option>
                        <option value="4">4 - 5 years</option>
                        <option value="3">3 - 4 years</option>
                        <option value="2">2 - 3 years</option>
                        <option value="6">1 - 2 years</option>
                        <option value="1">1 year - 6 months</option>
                        <option value="0">Less than 6 months</option>
                      </select>
                    </div>
                  }
                  {
                    <div className="form-medium">
                      <div className="form-medium-selector">
                        <div>
                          <input
                            type="radio"
                            id="option1"
                            name="listBox"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="option1">
                            Ownwership of the place of residence is in the name
                            of the applicant/ spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option2"
                            name="listBox"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="option2">
                            Ownwership is in the name of mother/ father of
                            applicant/ spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option3"
                            name="listBox"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="option3">
                            Continuously registered leased bond only in the name
                            of applicant/ spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option4"
                            name="listBox"
                            value="option4"
                            checked={selectedOption === "option4"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="option4">
                            Government Quarters List only in name if applicant/
                            spouse
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="option5"
                            name="listBox"
                            value="option5"
                            checked={selectedOption === "option5"}
                            onChange={handleOptionChange}
                          />
                          <label htmlFor="option5">
                            The applicant/ spouse resides conteneously 10 years
                            or more in a government property
                          </label>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              )}

              {withoutMainDoc && (
                <div>
                  {
                    <div className="form-sex">
                      <label className="form-label">
                        Other Documents to prove place of residance{" "}
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={withSecondDoc}
                          onChange={handleWithSecondCheckboxChange}
                        />
                        Yes
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={withoutSecondDoc}
                          onChange={handleWithoutSecondCheckboxChange}
                        />
                        No
                      </label>
                    </div>
                  }
                </div>
              )}

              {withoutSecondDoc && (
                <div>
                  {
                    <Alert severity="info">
                      If the nearest school is the applied school
                    </Alert>
                  }
                  {
                    <div className="form-sex">
                      <label className="form-label">
                        Documents to prove the present place of living after the
                        marriage{" "}
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={withThirdDoc}
                          onChange={handleWithThirdCheckboxChange}
                        />
                        Yes
                      </label>
                      <label className="form-sex-label">
                        <input
                          className="form-sex-checkbox"
                          type="checkbox"
                          checked={withoutThirdDoc}
                          onChange={handleWithoutThirdCheckboxChange}
                        />
                        No
                      </label>
                    </div>
                  }
                </div>
              )}
            </>

            <div className="form-sex">
              <label className="form-label">
                Additional Documents in proof of place of living:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withAdditionalDoc}
                  onChange={handleWithAdditionalCheckboxChange}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutAdditionalDoc}
                  onChange={handleWithoutAdditionalCheckboxChange}
                />
                No
              </label>
            </div>
            <div className="form-religion">
              <label className="form-label">
                Number of years that the applicant was included in the electoral
                register:{" "}
              </label>
              <input
                type="text"
                id="applicantNumber"
                value={applicantNumber}
                onChange={(e) => setapplicantNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the applicant’s spouse was included in the
                electoral register:{" "}
              </label>
              <input
                type="text"
                id="spouseNumber"
                value={spouseNumber}
                onChange={(e) => setspouseNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of years that the legal guardian was included in the
                electoral register:{" "}
              </label>
              <input
                type="text"
                id="guardianNumber"
                value={guardianNumber}
                onChange={(e) => setguardianNumber(e.target.value)}
                required
              />
            </div>

            <Alert severity="info">
              This is applicable for a period of recent 05 years, prior to the
              year the application is submitted
            </Alert>

            <div className="form-religion">
              <label className="form-label">
                Number of schools located closer to the place of residence where
                the child could be admitted than the school applied by this
                application:{" "}
              </label>
              <input
                type="text"
                id="schoolNumber"
                value={schoolNumber[0]}
                readOnly
                required
              />
            </div>
          </fieldset>
        </form>
      </div>

      <div className="form-display-marks" onClick={(e) => calculateMarks()}>
        <Modal
          buttonText={"View Marks"}
          bodyHeader={"Marks for category based on proximity"}
          bodyText={marks.toString()}
        />
      </div>
    </>
  );
}
