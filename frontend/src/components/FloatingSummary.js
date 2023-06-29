import { useState, useContext, useEffect } from "react";
import Fab from "@mui/material/Fab";
import axios from "axios";
import Dialog from "../components/Dialog";
import { Alert, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MarksContext } from "./context/MarksContext";

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
  const { areMarksCalculated } = useContext(MarksContext);
  const [userName, setUserName] = useState(null);
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const { finalMarks } = useContext(MarksContext);
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("finalMarks ", finalMarks);
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

  const checkLogin = () => {
    setUserName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("email"));
    //console.log(userName);
    if (userName === null || email === null) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const saveMarks = async (e) => {
    const marks = {
      proximity: finalMarks["Based on proximity"],
      pastPupils: finalMarks["Based on Children of past pupils"],
      cousins: finalMarks["Based on Brothers/ sistors of student"],
      staff: finalMarks["Based on Children of staff"],
      officers: finalMarks["Based on Children of officers"],
      forign:
        finalMarks["Based on Children of persons arriving after living abroad"],
    };
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:4000/api/save-marks",
        marks,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data); // Handle success response
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

  return (
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
      {areMarksCalculated && (
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
      )}
      {clicked && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {userName === null ? (
                <Alert severity="info">Please login to save progress</Alert>
              ) : (
                "User name: " + userName
              )}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {email !== null ? "Email: " + email : null}
            </Typography>
            <hr></hr>
            <Typography
              id="modal-modal-title"
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Marks based on selected categories
            </Typography>
            {displaySummaryTable()}
            <Button
              variant="contained"
              onClick={(e) => saveMarks()}
              disabled={isLogged}
            >
              Save
            </Button>
          </Box>
        </Modal>
      )}
      {saved ? (
        <Dialog
          toOpen={true}
          title={"Info"}
          body={"Saved successfully!"}
        ></Dialog>
      ) : null}
    </div>
  );
}
