import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import Button from "./Button";
import "./Navbar.css";
import { useUsername } from "./context/UsernameContext";

const Navbar = () => {
  const user = useUsername();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    showButton();
  }, []);

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
          user.userName = "REGISTER";
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
                  user.userName !== "REGISTER" ? (
                    <div className="userName-holder">
                      <label buttonStyle="btn--outline">
                        Hello ! {user.userName}
                      </label>
                      <div
                        className="logOut"
                        data-tooltip="Click here to Log out"
                      >
                        <AiOutlineLogout onClick={(e) => logOutUser()} />
                      </div>
                    </div>
                  ) : (
                    <Link to="/register" className="btn-link">
                      <Button buttonStyle="btn--outline">REGISTER</Button>
                    </Link>
                  )
                ) : user.userName !== "REGISTER" ? (
                  <div className="userName-holder-mobile">
                    <label buttonStyle="btn--outline">
                      Hello ! {user.userName}
                    </label>
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={(e) => logOutUser()}
                    >
                      LOGOUT
                    </Button>
                  </div>
                ) : (
                  <Link to="/register" className="btn-link">
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      REGISTER
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
