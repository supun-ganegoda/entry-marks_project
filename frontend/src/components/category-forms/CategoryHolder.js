import { useState } from "react";
import { useSelectedForms } from "../context/FormContext";
import FormCat from "./FormCat";

const CategoryHolder = () => {
  const selectedForms = useSelectedForms();

  // Create an array of form categories from selectedForms object
  const formCategories = Object.keys(selectedForms);

  // Create state variables for all form categories
  const [formStates, setFormStates] = useState(
    formCategories.reduce((acc, curr) => {
      return { ...acc, [curr]: false };
    }, {})
  );

  console.log(formStates);
  const handleFormClick = (category) => {
    // Set state of clicked category to true and all others to false
    setFormStates(
      formCategories.reduce((acc, curr) => {
        return { ...acc, [curr]: curr === category };
      }, {})
    );
  };

  return (
    <>
      <div className="holder-nav">
        <ul>
          {formCategories
            .filter((category) => selectedForms[category])
            .map((category) => (
              <li key={category} onClick={() => handleFormClick(category)}>
                {`Form ${category}`}
              </li>
            ))}
        </ul>
        <div className="forms-display">
          {formCategories.map((category) =>
            formStates[category] ? (
              <FormCat key={category} category={category} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
export default CategoryHolder;
