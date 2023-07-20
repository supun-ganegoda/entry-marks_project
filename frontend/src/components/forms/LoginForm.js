import { useNavigate } from "react-router-dom";
import { loginData } from "../data/LoginFormData";
import { useState } from "react";
import Dialog from "../Dialog";

const LoginForm = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [loginFail, setLoginFail] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}login`, {
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
        //alert("Login Success!");

        navigate("/", { replace: true, forceRefresh: true });
        //window.location.reload();
      } else {
        setLoginFail(true);
        setErrorMsg(data.error + ". Check your credentials or register");
      }
    } catch (error) {
      //console.log(error.message);
      setLoginFail(true);
      setErrorMsg(error.message + ". Check your connections!");
    }
  };

  const handleLoginFail = (e) => {
    setLoginFail(!loginFail);
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
      {loginFail && (
        <div onClick={(e) => handleLoginFail()}>
          <Dialog toOpen={true} title={"Error"} body={errorMsg.toString()} />
        </div>
      )}
    </>
  );
};
export default LoginForm;
