//asking for the express packages
const express = require("express");
const verifyToken = require("../controller/tokenVerifier");

const {
  registerUser,
  loginUser,
  logoutUser,
  getAllUserDetails,
  getUserDetails,
  deleteUser,
  updateUser,
  submitChildDetails,
} = require("../controller/userController");

//getting the router object
const router = express.Router();

//create routes --> function is at the controller
router.post("/register", registerUser);

//login the users
router.post("/login", loginUser);

//logout user
router.post("/logout", logoutUser);

router.get("/", getAllUserDetails);

router.get("/:id", getUserDetails);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

/* ########################################################## */
//form submitting routes
router.post("/child-details", verifyToken, submitChildDetails);

//export the router object
module.exports = router;
