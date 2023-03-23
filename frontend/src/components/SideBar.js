import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBarData } from "./data/SideBarData";
import "./SideBar.css";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="sidebar">
        <div className="menu-heading">
          Application for Grade 1 Students in Govt. Schools for Year 2023
        </div>
      </div>
      <nav className="side-menu active">
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
