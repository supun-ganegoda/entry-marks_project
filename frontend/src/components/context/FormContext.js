import React, { useState, useContext } from "react";

const FormContext = React.createContext();
const UpdateFormContext = React.createContext();

export const useSelectedForms = () => {
  return useContext(FormContext);
};

export const useUpdateSelectedForms = () => {
  return useContext(UpdateFormContext);
};

export const FormsProvider = ({ value, children }) => {
  const [forms, setForms] = useState(value);
  return (
    <FormContext.Provider value={forms}>
      <UpdateFormContext.Provider value={setForms}>
        {children}
      </UpdateFormContext.Provider>
    </FormContext.Provider>
  );
};

export default FormsProvider;
