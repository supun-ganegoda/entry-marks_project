import { Link } from "react-router-dom";
import Button from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="home__hero--section dark">
        <div className="container">
          <div className="top-line">WELCOME TO ENTRY MARKS PROJECT</div>
          <div className="row home__hero-row">
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className="heading">SITE HIGHLIGHTS</h1>
                <p className="home__hero-subtitle">
                  This is the entry marks calculation website for the grade 1
                  students in government schools
                </p>
                <div className="home__hero-button-wrapper">
                  <Link to="/calculate-marks">
                    <Button buttonStyle="btn--wide" buttonColor="blue">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/varification">
                    <Button buttonStyle="btn--wide" buttonColor="light-blue">
                      Verification
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src="images/img-1.jpg" alt="school" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
