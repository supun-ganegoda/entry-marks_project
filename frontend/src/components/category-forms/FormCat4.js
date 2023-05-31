import { useState } from "react";
import "./FormCat.css";

export default function FormCat4() {
  const [post, setpost] = useState("");
  const [institution, setinstitution] = useState("");
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

  function handleWithForwardedDoc() {
    setwithForwardedDoc(true);
    setwithoutForwardedDoc(false);
  }

  function handleWithoutForwardedDoc() {
    setwithoutForwardedDoc(true);
    setwithForwardedDoc(false);
  }

  return (
    <>
      <div className="cat-form-container">
        <form>
          <fieldset>
            <legend>
              Children of staff in education institutions involved in school
              education
            </legend>

            <div className="form-religion">
              <label className="form-label">
                Post held as a permanent employee in the relevant institutions
                and Period of service:{" "}
              </label>
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
            </div>

            <div className="form-religion">
              <label className="form-label">
                If serving presently in a difficult school, period of difficult
                school service:{" "}
              </label>
              <input
                type="text"
                id="difficultSchool"
                value={difficultSchool}
                onChange={(e) => setdifficultSchool(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                If served earlier in a difficult school such period of service:{" "}
              </label>
              <input
                type="text"
                id="earlydifficultSchool"
                value={earlydifficultSchool}
                onChange={(e) => setearlydifficultSchool(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">Un-utilized Leave: </label>
              <input
                type="text"
                id="leave2020"
                placeholder="2020"
                value={leave2020}
                onChange={(e) => setleave2020(e.target.value)}
                required
              />
              <input
                type="text"
                id="leave2019"
                placeholder="2019"
                value={leave2019}
                onChange={(e) => setleave2019(e.target.value)}
                required
              />
              <input
                type="text"
                id="leave2018"
                placeholder="2018"
                value={leave2018}
                onChange={(e) => setleave2018(e.target.value)}
                required
              />
              <input
                type="text"
                id="leave2017"
                placeholder="2017"
                value={leave2017}
                onChange={(e) => setleave2017(e.target.value)}
                required
              />
              <input
                type="text"
                id="leave2016"
                placeholder="2016"
                value={leave2016}
                onChange={(e) => setleave2016(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                If serving in the school applied, period of service in said
                school:{" "}
              </label>
              <input
                type="text"
                id="servicePeriod"
                value={servicePeriod}
                onChange={(e) => setservicePeriod(e.target.value)}
                required
              />
            </div>

            <div className="form-religion">
              <label className="form-label">
                Distance from permanent place of residence to the school
                applied:{" "}
              </label>
              <input
                type="text"
                id="distance"
                placeholder="km"
                value={distance}
                onChange={(e) => setdistance(e.target.value)}
                required
              />
            </div>

            <div className="form-sex">
              <label className="form-label">
                Main document forwarded relevant to the place of residence:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withForwardedDoc}
                  onChange={handleWithForwardedDoc}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutForwardedDoc}
                  onChange={handleWithoutForwardedDoc}
                />
                No
              </label>
            </div>

            <div className="form-religion">
              <label className="form-label">
                Distance from permanent place of residence to the school
                applied:{" "}
              </label>
              <input
                type="text"
                id="currentDistance"
                placeholder="km"
                value={currentDistance}
                onChange={(e) => setcurrentDistance(e.target.value)}
                required
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
