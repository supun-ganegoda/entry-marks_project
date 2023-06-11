import { useState } from "react";
import "./FormCat.css";

export default function FormCat4() {
  const [post, setpost] = useState("");
  const [institution, setinstitution] = useState("");
  const [periodofservice , setperiodofservice] = useState("");
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
   

    if(periodofservice >= 20){
      totalMarks4 += 20;
    }else if (0 < periodofservice < 20)
    {
      totalMarks4 += (periodofservice*1);
    }

    if(withDifficultSchool)
    {
      totalMarks4 += (difficultSchool*5);
    }else if (withoutDifficultSchool)
    {
      totalMarks4 += (earlydifficultSchool*3);
    }

    if((0 < servicePeriod) && (servicePeriod < 3 )){
      totalMarks4 += 5;
 
     }else if (servicePeriod >=3)
     {
      totalMarks4 += 10;
     }

     leavesmark +=  Math.floor(((+leave2016) + (+leave2017) + (+leave2018)  + (+leave2019) + (+leave2020))/20);

    if(leavesmark >= 5)
    {
      totalMarks4 += 10;
    }else if (leavesmark > 0){
      totalMarks4 += leavesmark*2;
    }

    if(withForwardedDoc){
      if(distance <= 1){
        totalMarks4 += 10;
      }else if((1 < distance) && (distance<= 3)){
        totalMarks4 += 8;
      }else if((3 <distance) && (distance <= 5)){
        totalMarks4 += 6;
      }else
      {
        totalMarks4 += 4;
      }
    }

    if(currentDistance >= 100){
      totalMarks4 += 25;
    }else if ((70 <= currentDistance) && (currentDistance < 100)){
      totalMarks4 += 20;
    }else if ((40 <= currentDistance ) && (currentDistance < 70)){
      totalMarks4 += 15;
    }else if ((20 <= currentDistance) && (currentDistance < 40)){
      totalMarks4 += 10;
    }else if (0 < currentDistance)
    {
      totalMarks4 += 5;
    }

    setMarks(totalMarks4);
  };
   

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
              <input
                type="text"
                id="periodofservice"
                placeholder="Period of Service in Complete Years"
                value={periodofservice}
                onChange={(e) =>  setperiodofservice(e.target.value)}
                required
              />
            </div>
            <div className="form-sex">
              <label className="form-label">
              Serving presently in a difficult school:{" "}
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withDifficultSchool}
                  onChange={handleWithDifficultSchool}
                />
                Yes
              </label>
              <label className="form-sex-label">
                <input
                  className="form-sex-checkbox"
                  type="checkbox"
                  checked={withoutDifficultSchool}
                  onChange={handleWithoutDifficultSchool}
                />
                No
              </label>

              {withDifficultSchool && (
                <div>
                  {
                    <div className="form-religion">
                    <label className="form-label">
                      Period of difficult school service:{" "}
                    </label>
                    <input
                      type="text"
                      id="difficultSchool"
                      value={difficultSchool}
                      onChange={(e) => setdifficultSchool(e.target.value)}
                      required
                    />
                    </div>
                  }
                </div>
              )}
              {withoutDifficultSchool && (
                <div>
                  {
                    <div className="form-religion">
                    <label className="form-label">
                      Period of difficult school service:{" "}
                    </label>
                    <input
                      type="text"
                      id="earlydifficultSchool"
                      value={earlydifficultSchool}
                      onChange={(e) => setearlydifficultSchool(e.target.value)}
                      required
                    />
                    </div>
                  }
                </div>
              )}

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
                id="distance"
                placeholder="km"
                value={distance}
                onChange={(e) => setdistance(e.target.value)}
                required
              />
            </div>
            <div className="form-religion">
              <label className="form-label">
                Distance from present place of work to the school
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
        <button onClick={calculateMarks}>Calculate</button>

        <div>
          <p>Marks: {marks}</p>
        </div>
      
    </>
  );
}
