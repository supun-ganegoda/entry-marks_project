import { useState } from "react";
import axios from "axios";
import "./VerificationPage.css";

//64772b9d5cd44167a34ae035

const VerificationPage = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  const [hashCode, setHashCode] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [verified, setVerified] = useState(false);
  const [docError, setDocError] = useState(false);

  const handleOnChange = (e) => {
    setHashCode(e);
    setVerified(false);
    setDocError(false);
  };

  const checkHashCode = async () => {
    try {
      const document = await axios.get(`${url}pdf/verifyPDF/${hashCode}`);
      if (document.data.error === null) {
        setDocError(false);
        setVerified(true);
        setUserName(document.data.userName);
        setEmail(document.data.email);
      } else {
        setDocError(true);
      }
    } catch (error) {
      setDocError(true);
      console.error(error);
    }
  };

  return (
    <>
      <div className="verification-container">
        <div className="image-container">
          <img
            src="./images/SDDK.png"
            alt="SDDK company"
            style={{ width: "100%", maxWidth: "156px" }}
          />
        </div>
        <div className="header-field">
          <h1>DOCUMENT VERIFICATION PORTAL</h1>
        </div>
        <div className="input-field">
          <label>Enter the Hash code: </label>
          <input
            placeholder="hashcode appear in document"
            type="text"
            onChange={(e) => handleOnChange(e.target.value)}
            required
          />
          <button
            disabled={hashCode ? false : true}
            onClick={(e) => checkHashCode()}
          >
            Check
          </button>
        </div>
        {verified && (
          <div className="result-container">
            <h2>Document verified !</h2>
            <p>
              This document issued to {userName} having email{" "}
              {email.slice(0, 5)} ****@{email.slice(-3)}
            </p>
          </div>
        )}
        {docError && (
          <div className="result-container">
            <h2>Failed to verify the document !</h2>
            <p>
              Please check the hashCode is correct or this document is not
              issued from our website
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default VerificationPage;
