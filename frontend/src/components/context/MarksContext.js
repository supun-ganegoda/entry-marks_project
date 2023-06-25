import React, { createContext, useState } from "react";

// Create the MarksContext
export const MarksContext = createContext();

// Create a MarksProvider component
export const MarksProvider = ({ children }) => {
  const [marks, setMarks] = useState({});

  // Update the marks value
  const updateMarks = (componentName, value) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [componentName]: value,
    }));
  };

  // Check if all marks calculated
  //   console.log(marks);
  const areMarksCalculated = Object.values(marks).every(
    (value) => value === true
  );

  return (
    <MarksContext.Provider value={{ marks, updateMarks, areMarksCalculated }}>
      {children}
    </MarksContext.Provider>
  );
};
