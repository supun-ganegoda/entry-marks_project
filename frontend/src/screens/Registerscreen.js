import React, { useState, useEffect } from "react";
import "./screen.css";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [nic, setnic] = useState("");

  function register() {
    const user = {
      name,
      email,
      nic
    };
    console.log(user);
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="NIC"
              value={nic}
              onChange={(e) => {
                setnic(e.target.value);
              }}
            />

            <button className="btn btn-primary mt-3" onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
