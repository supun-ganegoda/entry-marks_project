import "./SchoolDetails.css";
//import SchoolFinder from "../SchoolFinder";
import { useSelectedSchools } from "../context/SelectedSchoolsContext";
import SchoolLocator from "../SchoolLocator";

const OtherSchoolDetails = () => {
  const selected = useSelectedSchools();
  console.log(selected);

  return (
    <>
      {/* <SchoolFinder /> */}
      <h1>School locator running </h1>
      <SchoolLocator />
    </>
  );
};
export default OtherSchoolDetails;
