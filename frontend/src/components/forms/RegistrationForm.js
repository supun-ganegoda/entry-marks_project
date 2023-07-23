import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationForm.css";
import { inputs } from "../data/RegistrationFormData";
import Dialog from "../Dialog";

const RegistrationForm = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  //console.log(formValues);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      try {
        const response = await fetch(`${url}register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
          }),
        });

        const res = await response.json();
        console.log(res);

        if (response.ok) {
          navigate("/login-form");
        } else {
          setErrorMsg(res.error);
          setIsError(true);
          //console.log(res.error);
        }
      } catch (error) {
        //console.log(error.message);
        setIsError(true);
        setErrorMsg(error.message + ". Check your connection");
      }
    } else {
      setIsError(true);
      setErrorMsg("Passwords don't match each other!");
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setFormValues((prevData) => ({ ...prevData, [name]: value }));

    if (event.target.validity.valid) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: event.target.validationMessage,
      }));
    }
  };

  return (
    <>
      {isError && (
        <div onClick={(e) => setIsError(false)}>
          <Dialog toOpen={true} title={"Error"} body={errorMsg.toString()} />
        </div>
      )}

      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h1>REGISTER NOW</h1>
          {inputs.map((input) => (
            <div key={input.id} className="formInput">
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
              {errors[input.name] && (
                <span className="error">{input.errorMessage}</span>
              )}
            </div>
          ))}
          <button>SUBMIT</button>
          <Link to="/login-form">
            <p>Already registered ! Click here to login</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
