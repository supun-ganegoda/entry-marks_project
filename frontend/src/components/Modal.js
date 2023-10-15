import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "#fff",
  bgcolor: "#020a4f",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  buttonText: buttonText,
  bodyHeader: bodyHeader,
  bodyText: bodyText,
  onClose: onClose,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "#276afb", color: "#fff" }}
        onClick={handleOpen}
      >
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {bodyHeader}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#fff", fontWeight: "bold" }}
          >
            {bodyText}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
