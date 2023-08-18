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
  saveMarks,
  getMarks,
  saveSelectedSchools,
  getApplicantDetails,
  getPrefferedSchools,
} = require("../controller/userController");

//getting the router object
const router = express.Router();

//create routes --> function is at the controller
router.post("/register", registerUser);

//login the users
router.post("/login", loginUser);

//logout user
router.post("/logout", logoutUser);

router.get("/test", getAllUserDetails);

router.get("/get-marks", verifyToken, getMarks); //retrive marks from the database

router.get("/get-user-details", verifyToken, getUserDetails); //get user information

router.get("/get-applicant-details", verifyToken, getApplicantDetails); //get child information

router.get("/get-preffered-schools", verifyToken, getPrefferedSchools); //get preffered schools

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

/* ########################################################## */
//form submitting routes
router.post("/child-details", verifyToken, submitChildDetails);
router.post("/selected-schools", verifyToken, saveSelectedSchools); //save selected schools to the database
router.post("/save-marks", verifyToken, saveMarks);

module.exports = router;
