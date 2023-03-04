import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  useEffect(() => {
    showButton();
  }, []);

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
                <Link to="/aboutUs" className="nav-links">
                  About us
                </Link>
              </li>
              <li className="nav-button" onClick={closeMobileMenu}>
                {button ? (
                  <Link to="/register" className="btn-link">
                    <Button buttonStyle="btn--outline">REGISTER</Button>
                  </Link>
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
