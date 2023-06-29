import "./ModernFooter.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <a href="https://sddk.com" target="_blank" rel="noreferrer">
              <img
                src="./images/SDDk.png"
                style={{ width: "120px", height: "120px" }}
                alt="SDDK logo"
              />
            </a>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="https://sddk.com/faq" target="_blank" rel="noreferrer">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://sddk.com/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://sddk.com/terms-conditions"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>contact us</h4>
            <ul>
              <li>
                <a
                  href="https://sddk.com/contact-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Faculty of Engineering,
                  <br />
                  University of Ruhuna, <br />
                  Hapugala, <br />
                  Galle.
                </a>
              </li>
              <li>
                <a
                  href="https://sddk.com/contact-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tel : +9432 2281 867
                </a>
              </li>
              <li>
                <a
                  href="https://sddk.com/contact-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fax : +9432 2281 867
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <i className="fab fa-facebook-f">
                <Link to="https://www.facebook.com" target="_blank">
                  <FaFacebook />
                </Link>
              </i>

              <i className="fab fa-twitter">
                <Link to="https://www.twitter.com" target="_blank">
                  <FaTwitter />
                </Link>
              </i>

              <i className="fab fa-linkedin-in">
                <Link to="https://www.linkdin.com" target="_blank">
                  <FaLinkedin />
                </Link>
              </i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
