import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import BLAvatars from "./Avatar";
import Dialog from "./Dialog";
import WelcomeDialog from "./WelcomeDialog";
import { useNavbar } from "./context/NavbarContext";

const Navbar = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const { showNavbar } = useNavbar();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userName, setUserName] = useState("");
  const [loggedout, setLoggedOut] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   showButton();
  //   if (localStorage.getItem("userName")) {
  //     setUserName(localStorage.getItem("userName"));
  //     //console.log(userName);
  //   } else {
  //     setUserName("REGISTER");
  //   }
  // }, [userName]);

  const resetStates = () => {
    if (localStorage.getItem("userName")) {
      setWelcome(true);
      setUserName(localStorage.getItem("userName"));
      //console.log(userName);
    } else {
      setUserName("REGISTER");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      resetStates();
    }
  }, [location.pathname]);

  const handleLogOut = (e) => {
    setLoggedOut(false);
  };

  const logOutUser = () => {
    fetch(`${url}logout`, {
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
          localStorage.removeItem("email");
          localStorage.removeItem("lat");
          localStorage.removeItem("lng");
          localStorage.removeItem("selectedSchool");
          localStorage.removeItem("gender");
          setUserName("REGISTER");
          // alert("Log out Success! ");
          setLoggedOut(true);
          navigate("/");
          window.location.reload();
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
      {showNavbar && (
        <>
          {welcome && <WelcomeDialog />}
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
              <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                  ENTRY MARKS PORTAL
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
                        <div className="btn-link">
                          <Link to="/register">
                            <Button buttonStyle={"btn--outline"}>
                              {userName}
                            </Button>
                          </Link>
                          <div className="login" title="Click here to login">
                            <Link to="/login-form">
                              <AiOutlineLogin />
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="userName-holder">
                          <BLAvatars userName={userName} />

                          <div className="logOut" title="Click here to logout">
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
                      <>
                        <Link to="/register" className="btn-link">
                          <Button
                            buttonStyle={"btn--outline"}
                            buttonSize={"btn--mobile"}
                          >
                            {userName}
                          </Button>
                        </Link>
                        <Link to="/login-form" className="btn-link">
                          <Button
                            buttonStyle={"btn--outline"}
                            buttonSize={"btn--mobile"}
                          >
                            LOGIN
                          </Button>
                        </Link>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </IconContext.Provider>
        </>
      )}

      {loggedout && (
        <div onClick={(e) => handleLogOut()}>
          <Dialog toOpen={true} title={"Alert"} body={"Logout successfully!"} />
        </div>
      )}
    </>
  );
};

export default Navbar;
