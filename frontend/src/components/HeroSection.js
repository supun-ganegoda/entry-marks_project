import { Link } from "react-router-dom";
import Button from "./Button";
import "./HeroSection.css";
import VideoPlayer from "./VideoPlayer";

const HeroSection = () => {
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
                </p>
                <div className="home__hero-button-wrapper">
                  <Link to="/applications">
                    <Button buttonStyle="btn--wide" buttonColor="blue">
                      Get Started
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
