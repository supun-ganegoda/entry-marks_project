import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SideBarData } from "./data/SideBarData";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./SideBar.css";

const SideBar = () => {
  const [pane, setShowPane] = useState(true);
  const [closeButton, setCloseButton] = useState(false);

  useEffect(() => {
    showPane();
  }, []);
  const showPane = () => {
    if (window.innerWidth <= 960) {
      setShowPane(false);
    } else {
      setShowPane(true);
    }
  };
  window.addEventListener("resize", showPane);

  const showSidebar = () => {
    setShowPane(true);
    setCloseButton(true);
  };

  const closeSidebar = () => {
    setShowPane(false);
    setCloseButton(false);
  };

  return (
    <>
      <div className="menu-heading">
        {!pane ? <FaBars onClick={showSidebar} /> : null}
        {closeButton ? <AiOutlineCloseCircle onClick={closeSidebar} /> : null}
        Application for Grade 1 Students in Govt. Schools for Year 2023
      </div>

      <nav className={pane ? "side-menu active" : "side-menu"}>
        <ul className="side-menu-items">
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default SideBar;
