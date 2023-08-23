import "./SchoolDetails.css";
//import SchoolFinder from "../SchoolFinder";
import SchoolLocator from "../SchoolLocator";
import { Link } from "react-router-dom";

const OtherSchoolDetails = () => {
  return (
    <>
      {/* <SchoolFinder /> */}

      <SchoolLocator />
      <div className="form-proceed">
          <Link to="/categorySelector">
            <button>Proceed</button>
          </Link>
      </div>
    </>
  );
};
export default OtherSchoolDetails;
