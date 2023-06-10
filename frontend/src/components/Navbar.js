import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import Button from "./Button";
import "./Navbar.css";
import BLAvatars from "./Avatar";

const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    showButton();
    if (localStorage.getItem("userName")) {
      setUserName(localStorage.getItem("userName"));
      console.log(userName);
    } else {
      setUserName("REGISTER");
    }
  }, [userName]);

  const logOutUser = () => {
    fetch("http://localhost:4000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"), // Include the token in the request body
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("token");
          localStorage.removeItem("userName");
          setUserName("REGISTER");
          alert("Log out Success! ");
          navigate("/");
          // Redirect or perform any other actions after successful logout
        } else {
          console.log("Something went wrong!");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              ENRTY MARKS PROJECT
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={closeMobileMenu}>
                <Link to="/about-Us" className="nav-links">
                  About us
                </Link>
              </li>
              <li className="nav-button" onClick={closeMobileMenu}>
                {button ? (
                  userName === "REGISTER" ? (
                    <Link to="/register" className="btn-link">
                      <Button buttonStyle={"btn--outline"}>{userName}</Button>
                    </Link>
                  ) : (
                    <div className="userName-holder">
                      <BLAvatars userName={userName} />

                      <div
                        className="logOut"
                        data-tooltip="Click here to Log out"
                      >
                        <AiOutlineLogout
                          style={{
                            marginLeft: "12px",
                            marginTop: "5px",
                            scale: "1.5",
                          }}
                          onClick={(e) => logOutUser()}
                        />
                      </div>
                    </div>
                  )
                ) : userName !== "REGISTER" ? (
                  <div className="userName-holder-mobile">
                    <label buttonStyle={"btn--outline"}>
                      Hello ! {userName}
                    </label>
                    <Button
                      buttonStyle={"btn--outline"}
                      buttonSize={"btn--mobile"}
                      onClick={(e) => logOutUser()}
                    >
                      LOGOUT
                    </Button>
                  </div>
                ) : (
                  <Link to="/register" className="btn-link">
                    <Button
                      buttonStyle={"btn--outline"}
                      buttonSize={"btn--mobile"}
                    >
                      {userName}
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
