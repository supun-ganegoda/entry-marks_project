import React, { useState, useContext } from "react";

const SelectedSchoolContext = React.createContext();
const UpdateSelectedSchoolContext = React.createContext();

export const useSelectedSchools = () => {
  return useContext(SelectedSchoolContext);
};

export const useUpdateSelectedSchools = () => {
  return useContext(UpdateSelectedSchoolContext);
};

export const SchoolProvider = ({ value, children }) => {
  const [schools, setSchools] = useState([]);
  return (
    <SelectedSchoolContext.Provider value={schools}>
      <UpdateSelectedSchoolContext.Provider value={setSchools}>
        {children}
      </UpdateSelectedSchoolContext.Provider>
    </SelectedSchoolContext.Provider>
  );
};

export default SchoolProvider;
