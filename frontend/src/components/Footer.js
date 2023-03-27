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
            <Link to="https://info@moe.gov.lk" target="_blank">
              <FaMailBulk />
              info@moe.gov.lk
            </Link>
          </div>
        </div>
        <div className="footer-social">
          <Link to ='https://www.facebook.com' target="_blank">
          <FaFacebook />
          </Link>
          <Link to = 'https://www.linkdin.com' target="_blank">
          <FaLinkedin />
          </Link>
          <Link to = 'https://www.twitter.com' target="_blank">
          <FaTwitter />
          </Link>
        </div>
      </div>
      <div className="footer-copyright">SDDK Solutions &copy; 2023</div>
    </>
  );
};
export default Footer;
