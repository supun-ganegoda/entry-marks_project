import {
  FaPhoneAlt,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-header">
          <div className="footer-logo">
            <img src="./images/SDDK.png" alt="SDDK company"></img>
          </div>
          <div className="footer-header-text">
            <h3>SDDK Solutions</h3>
          </div>
        </div>
        <div className="footer-address">
          <p>Ministry of Education,</p>
          <p>Isurupaya,</p>
          <p>Baththaramulla,</p>
          <p>10120</p>
          <p>Sri Lanka.</p>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-tel">
            <FaPhoneAlt />
            +94 112 785141
          </div>
          <div className="footer-contact-mail">
            <Link to="/info@moe.gov.lk">
              <FaMailBulk />
              info@moe.gov.lk
            </Link>
          </div>
        </div>
        <div className="footer-social">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
      <div className="footer-copyright">SDDK Solutions &copy; 2023</div>
    </>
  );
};
export default Footer;
