import { useNavigate } from "react-router-dom";
import { loginData } from "../data/LoginFormData";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password,
      }),
    });

    const data = await response.json();

    //console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("email", data.email);
      localStorage.setItem("userName", data.username);
      alert("Login Success!");
      navigate("/");
      window.location.reload();
    } else {
      alert("Please check your username and password");
    }
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {loginData.map((input) => (
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
              />
            </div>
          ))}
          <button>LOGIN</button>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
