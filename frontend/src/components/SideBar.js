import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { SideBarData } from "./data/SideBarData";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./SideBar.css";
import ChildDetails from "./ChildDetails";
import ApplicantDetails from "./ApplicantDetails";

const SideBar = () => {
  const [pane, setShowPane] = useState(true);
  const [closeButton, setCloseButton] = useState(false);
  const [childForm, setChildForm] = useState(false);
  const [applicationForm, setApplicationForm] = useState(false);
  const sidebarRef = useRef(null);
  const [childButtonClicked, setChildButtonClicked] = useState(false);
  const [applButtonClicked, setapplButtonClicked] = useState(false);
  const [schoolButtonClicked, setschooldButtonClicked] = useState(false);
  const [otherSchooldButtonClicked, setOtherSchooldButtonClicked] = useState(false);
  const [electButtonClicked, setElectButtonClicked] = useState(false);

  useEffect(() => {
    showPane();
    setChildForm(true);
    setChildButtonClicked(true)
    const closeSidebar_2 = (e) => {
      if (window.innerWidth <= 768) {
        if (sidebarRef.current.contains(e.target)) {
          closeSidebar();
        }
      }
    };
    document.body.addEventListener("click", closeSidebar_2);
    return () => {
      document.body.removeEventListener("click", closeSidebar_2);
    };
  }, []);

  const showPane = () => {
    if (window.innerWidth <= 768) {
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

  const setChildernFormVisible = () => {
    setChildForm(true);
    setApplicationForm(false);
    setChildButtonClicked(true)
    setapplButtonClicked(false)
    setschooldButtonClicked(false)
    setOtherSchooldButtonClicked(false)
    setElectButtonClicked(false)
  };

  const setApplicationFormVisible = () => {
    setApplicationForm(true);
    setChildForm(false);
    setChildButtonClicked(false)
    setapplButtonClicked(true)
    setschooldButtonClicked(false)
    setOtherSchooldButtonClicked(false)
    setElectButtonClicked(false)
  };

  const setSchoolFormVisible = ()=>{
    setChildButtonClicked(false)
    setapplButtonClicked(false)
    setschooldButtonClicked(true)
    setOtherSchooldButtonClicked(false)
    setElectButtonClicked(false)
  }

  const setOhterScoolFormVisible = ()=>{
    setChildButtonClicked(false)
    setapplButtonClicked(false)
    setschooldButtonClicked(false)
    setOtherSchooldButtonClicked(true)
    setElectButtonClicked(false)
  }

  const setElectFormVisible = ()=>{
    setChildButtonClicked(false)
    setapplButtonClicked(false)
    setschooldButtonClicked(false)
    setOtherSchooldButtonClicked(false)
    setElectButtonClicked(true)
  }

  return (
    <>
    <div className="sidebar-wrapper">
    <div className="menu-heading">
        {!pane ? <FaBars onClick={showSidebar} /> : null}
        {closeButton ? <AiOutlineCloseCircle onClick={closeSidebar} /> : null}
        Application for Grade 1 Students in Govt. Schools for Year 2023
      </div>
      <div className="sidebar-container" ref={sidebarRef}>
        <nav className={pane ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items">
            <li className={SideBarData[0].cName} >
              <Link to="#" onClick={setChildernFormVisible} style={{backgroundColor:childButtonClicked?'#1a83ff':null}}>
                {SideBarData[0].icon}
                <span>{SideBarData[0].title}</span>
              </Link>
            </li>
            <li className={SideBarData[1].cName}>
              <Link to="#" onClick={setApplicationFormVisible} style={{backgroundColor:applButtonClicked?'#1a83ff':null}}>
                {SideBarData[1].icon}
                <span>{SideBarData[1].title}</span>
              </Link>
            </li>
            <li className={SideBarData[2].cName}>
              <Link to="#" onClick={setSchoolFormVisible} style={{backgroundColor:schoolButtonClicked?'#1a83ff':null}}>
                {SideBarData[2].icon}
                <span>{SideBarData[2].title}</span>
              </Link>
            </li>
            <li className={SideBarData[3].cName}>
              <Link to="#" onClick={setOhterScoolFormVisible} style={{backgroundColor:otherSchooldButtonClicked?'#1a83ff':null}}>
                {SideBarData[3].icon}
                <span>{SideBarData[3].title}</span>
              </Link>
            </li>
            <li className={SideBarData[4].cName}>
              <Link to="#" onClick={setElectFormVisible} style={{backgroundColor:electButtonClicked?'#1a83ff':null}}>
                {SideBarData[4].icon}
                <span>{SideBarData[4].title}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
      
      {applicationForm && <ApplicantDetails />}
      {childForm && <ChildDetails />}
    </>
  );
};
export default SideBar;
