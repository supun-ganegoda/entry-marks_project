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
                </ul>
              </div>
            </div>
          </IconContext.Provider>
        </>
      )}
    </>
  );
};

export default Navbar;
