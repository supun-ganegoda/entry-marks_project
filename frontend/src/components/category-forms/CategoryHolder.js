import { useState, useEffect } from "react";
import { useSelectedForms } from "../context/FormContext";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./CategoryHolder.css";
import FormCat from "./FormCat";

const CategoryHolder = () => {
  const selectedForms = useSelectedForms();
  const [selected, setSelected] = useState(false);

  // Create an array of form categories from selectedForms object
  const formCategories = Object.keys(selectedForms);

  // Create state variables for all form categories
  const [formStates, setFormStates] = useState(
    formCategories.reduce((acc, curr) => {
      return { ...acc, [curr]: false };
    }, {})
  );

  const handleFormClick = (category) => {
    // Set state of clicked category to true and all others to false
    setFormStates(
      formCategories.reduce((acc, curr) => {
        return { ...acc, [curr]: curr === category };
      }, {})
    );
  };

  useEffect(() => {
    if (
      formCategories.filter((category) => selectedForms[category])[0] ===
      "selectedForms"
    ) {
      setSelected(false);
    } else {
      setSelected(true);
    }
    handleFormClick(
      formCategories.filter((category) => selectedForms[category])[0]
    );
  }, []);

  return (
    <>
      {selected ? (
        <div className="holder-wrapper">
          <div className="holder-nav">
            <ul>
              {formCategories
                .filter((category) => selectedForms[category])
                .map((category) => (
                  <li key={category} onClick={() => handleFormClick(category)}>
                    {`Form for ${category}`}
                  </li>
                ))}
            </ul>
          </div>

          <div className="forms-display">
            {formCategories.map((category) =>
              formStates[category] ? (
                <FormCat key={category} category={category} />
              ) : null
            )}
          </div>
        </div>
      ) : (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Please select a category —{" "}
          <strong>from previous selection page</strong>
        </Alert>
      )}
    </>
  );
};
export default CategoryHolder;
