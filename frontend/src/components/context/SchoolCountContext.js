import React, { useState, useContext } from "react";

const SchoolCount = React.createContext();
const UpdateSchoolCount = React.createContext();

export const useSchoolCount = () => {
  return useContext(SchoolCount);
};

export const useUpdateSchoolCount = () => {
  return useContext(UpdateSchoolCount);
};

export const SchoolCountProvider = ({ children }) => {
  const [schoolCount, setSchoolCount] = useState([]);
  return (
    <SchoolCount.Provider value={schoolCount}>
      <UpdateSchoolCount.Provider value={setSchoolCount}>
        {children}
      </UpdateSchoolCount.Provider>
    </SchoolCount.Provider>
  );
};

export default SchoolCountProvider;
