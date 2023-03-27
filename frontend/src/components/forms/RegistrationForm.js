import { useState } from "react";
import "./RegistrationForm.css";
import { inputs } from "../data/RegistrationFormData";

const RegistrationForm = () => {
    const [formValues, setFormValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        setFormValues((prevData) => ({ ...prevData, [name]: value }));
    
        if (event.target.validity.valid) {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: event.target.validationMessage
          }));
        }
      };

  return (
    <>
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h1>REGISTER NOW</h1>
        {inputs.map((input) => (
        <div key={input.id} className='formInput'>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.name}
            placeholder={input.placeholder}
            pattern={input.pattern}
            required={input.required}
            onChange={handleChange}
            onBlur={(event) => handleBlur(event)}
          />
         {errors[input.name] && <span className="error">{input.errorMessage}</span>}
        </div>
      ))}
          <button>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
