import { useState, useContext } from "react";
import Fab from "@mui/material/Fab";
import axios from "axios";
import Dialog from "../components/Dialog";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MarksContext } from "./context/MarksContext";
import "./Spinner.css";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // crypto module
import Spinner from "./Spinner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FloatingSummary() {
  const url = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const { areMarksCalculated } = useContext(MarksContext);
  const [userName] = useState(localStorage.getItem("userName"));
  const [saved, setSaved] = useState(false);
  const [email] = useState(localStorage.getItem("email"));
  const { finalMarks } = useContext(MarksContext);
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // generate hashcode
  const generateHashCode = (obj) => {
    const hashInput = userName + email + JSON.stringify(obj); // hash function inputs
    const hash = CryptoJS.SHA256(hashInput).toString(CryptoJS.enc.Hex);
    const uniqueHashCode = hash.slice(0, 15);
    return uniqueHashCode;
  };

  //console.log("finalMarks ", finalMarks);
  const displaySummaryTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(finalMarks).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{finalMarks[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const makeObject = () => {
    const marks = {
      proximity: finalMarks["Based on proximity"],
      pastPupils: finalMarks["Based on Children of past pupils"],
      cousins: finalMarks["Based on Brothers/ sistors of student"],
      staff: finalMarks["Based on Children of staff"],
      officers: finalMarks["Based on Children of officers"],
      forign:
        finalMarks["Based on Children of persons arriving after living abroad"],
    };
    return marks;
  };

  // const setDefaultZero = () => {
  //   const data = makeObject();
  //   data.userName = userName;
  //   data.email = email;
  //   for (const key in data) {
  //     if (data.hasOwnProperty(key) && data[key] === undefined) {
  //       data[key] = 0;
  //     }
  //   }
  //   return data;
  // };

  /*
  const sendMail = async (e) => {
    const data = setDefaultZero();
    setDownloadClicked(true);
    
    await axios
      .post(`${url}pdf/createPdf`, data) //create pdf next=> get pdf
      .then(() =>
        axios
          .get(`${url}pdf/fetchPdf`, { responseType: "blob" }) //to fetch the generated pdf
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "Summary-Report.pdf"); //to save we use file saver
          })
          .then(() =>
            axios
              .post(`${url}pdf/sendPdf`, { email: email })
              .then((response) => {
                console.log(response);
                //alert(response.data);
                setMailSend(true);
              })
          )
      );

    try {
      await axios.post(`${url}pdf/generatePDF`, data);

      const response = await axios.get(`${url}pdf/fetchPdf`, {
        responseType: "arraybuffer",
      });
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      saveAs(pdfBlob, "Summary-Report.pdf");

      setIsSendingEmail(true);
      await axios.post(`${url}pdf/sendPdf`, { email });
      setIsSendingEmail(false);
      setMailSend(true);
    } catch (error) {
      console.log(error);
      setIsSendingEmail(false);
      // Handle any errors here
    }
  };
*/

  const saveMarks = async (e) => {
    const marks = makeObject();
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      let response = await axios.post(`${url}save-marks`, marks, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data); // Handle success response
      let hash = generateHashCode(marks);
      console.log(hash);

      response = await axios.post(
        `${url}save-hash`,
        { hash: hash },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setSaved(true);
      setOpen(false);
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const displayModal = () => {
    setClicked(true);
    handleOpen();
  };

  const navigateToReport = () => {
    navigate("/pdf-report");
  };

  return (
    <>
      {loading && <Spinner body={"SAVING"} />}
      {/* {isSendingEmail && (
        <div className="spinner-overlay">
          <div className="spinner-container">
            <div className="spinner"></div>
            <span className="waiting-message" style={{ marginLeft: "0" }}>
              Generating Report...
            </span>
          </div>
        </div>
      )} */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "10%",
          transform: "translateY(50%)",
          display: "flex",
          justifyContent: "flex - end",
        }}
      >
        {areMarksCalculated &&
          (saved ? (
            <Fab
              onClick={(e) => navigateToReport()}
              variant="extended"
              style={{
                //   transform: "rotate(-90deg)",
                whiteSpace: "nowrap",
                width: "115px",
                backgroundColor: "rgb(39, 106, 251)",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              View Report
            </Fab>
          ) : (
            <Fab
              onClick={(e) => displayModal()}
              variant="extended"
              style={{
                //   transform: "rotate(-90deg)",
                whiteSpace: "nowrap",
                width: "100px",
                backgroundColor: "rgb(39, 106, 251)",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Summary
            </Fab>
          ))}
        {clicked && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                User name: {userName}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Email: {email}
              </Typography>
              <hr></hr>
              <Typography
                id="modal-modal-title"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                Marks based on selected categories
              </Typography>
              {displaySummaryTable()}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Button
                  variant="contained"
                  onClick={(e) => saveMarks()}
                  disabled={saved}
                >
                  save
                </Button>
                {/* <Link to="/pdf-report">
                  <Button
                    variant="contained"
                    style={{ width: "100%" }}
                    disabled={!saved}
                  >
                    View Report
                  </Button>
                </Link> */}
              </div>
            </Box>
          </Modal>
        )}
      </div>
      {saved ? (
        <Dialog
          toOpen={true}
          title={"Info"}
          body={"Saved successfully!"}
        ></Dialog>
      ) : null}
    </>
  );
}
