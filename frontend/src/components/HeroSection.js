import { Link } from "react-router-dom";
import Button from "./Button";
import "./HeroSection.css";
import VideoPlayer from "./VideoPlayer";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [tempToken] = useState(localStorage.getItem("token"));
  const [link, setLink] = useState("");

  useEffect(() => {
    //console.log(tempToken);
    if (tempToken === null) {
      setLink("/register");
    } else {
      setLink("/applications");
    }
  }, [tempToken]);

  return (
    <>
      <div className="home__hero--section dark">
        <div className="container" style={{ maxWidth: "1500px" }}>
          <div className="top-line">GRADE ONE ADMISSION MARK PORTAL</div>
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className="heading">HEADLINES</h1>
                <p className="home__hero-subtitle">
                  This is the entry marks calculation website for the grade 1
                  students in government schools in Sri Lanka.
                  <br />
                  You can check your eligibility to select for the schools by
                  submitting your data.
                  <br />
                  We offer document verification as well
                </p>
                <div className="home__hero-button-wrapper">
                  <Link to={link}>
                    <Button buttonStyle="btn--wide" buttonColor="blue">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/verification">
                    <Button buttonStyle="btn--wide" buttonColor="light-blue">
                      Verification
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <VideoPlayer />
                <div className="video-header">How to use our website</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
