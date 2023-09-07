import "./SchoolDetails.css";
import SchoolLocator from "../SchoolLocator";
import { Link } from "react-router-dom";

const OtherSchoolDetails = () => {
  return (
    <>
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
