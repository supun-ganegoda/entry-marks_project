import { useState } from "react";

export default function FormCat1() {
  const [applicantNumber, setapplicantNumber] = useState("");
  const [spouseNumber, setspouseNumber] = useState("");
  const [guardianNumber, setguardianNumber] = useState("");
  const [schoolNumber, setschoolNumber] = useState("");
  const [withMainDoc, setwithMainDoc] = useState(false);
  const [withoutMainDoc, setwithoutMainDoc] = useState(false);
  const [withAdditionalDoc, setwithAdditionalDoc] = useState(false);
  const [withoutAdditionalDoc, setwithoutAdditionalDoc] = useState(false);

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

  return (
    <>
      <div className="form-container">
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

            <div>
              <p>
                (This is applicable for a period of recent 05 years, prior to
                the year the application is submitted)
              </p>
            </div>

            <div className="form-religion">
              <label className="form-label">
                Number of schools located closer to the place of residence where
                the child could be admitted than the school applied by this
                application:{" "}
              </label>
              <input
                type="text"
                id="schoolNumber"
                value={schoolNumber}
                onChange={(e) => setschoolNumber(e.target.value)}
                required
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
