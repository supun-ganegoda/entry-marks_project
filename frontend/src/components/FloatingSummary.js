import { useState, useContext } from "react";
import Fab from "@mui/material/Fab";
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
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //console.log("Marks are calculated ", areMarksCalculated);

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
              User Name: {localStorage.getItem("userName")}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Email: sample@gmail.com
            </Typography>
            <hr></hr>
            <Typography
              id="modal-modal-title"
              sx={{ fontWeight: "bold", mt: 2 }}
            >
              Marks based on selected categories
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
}
