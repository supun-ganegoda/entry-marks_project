//asking for the express packages
const express = require("express");
const verifyToken = require("../controller/tokenVerifier");

const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  deleteUser,
  updateUser,
  submitChildDetails,
  submitApplicantDetails,
  saveMarks,
  getMarks,
  saveSelectedSchools,
  getApplicantDetails,
  getPrefferedSchools,
  loadApplicantDetails,
  loadElectorialDetails,
  submitElectorialDetails,
  saveHash,
} = require("../controller/userController");

//getting the router object
const router = express.Router();

//create routes --> function is at the controller
router.post("/register", registerUser);
router.post("/login", loginUser); //login the users
router.post("/logout", logoutUser); //logout user

router.get("/get-marks", verifyToken, getMarks); //retrive marks from the database
router.get("/load-applicant-details", verifyToken, loadApplicantDetails); //load applicant form data
router.get("/get-user-details", verifyToken, getUserDetails); //get user information
router.get("/get-applicant-details", verifyToken, getApplicantDetails); //get child information
router.get("/get-preffered-schools", verifyToken, getPrefferedSchools); //get preffered schools
router.get("/get-electorial-details", verifyToken, loadElectorialDetails); //get electorial details

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

/* ########################################################## */
//form submitting routes
router.post("/child-details", verifyToken, submitChildDetails); //post child details
router.post("/applicant-details", verifyToken, submitApplicantDetails);
router.post("/selected-schools", verifyToken, saveSelectedSchools); //save selected schools to the database
router.post("/electorial-details", verifyToken, submitElectorialDetails);
router.post("/save-marks", verifyToken, saveMarks);
router.post("/save-hash", verifyToken, saveHash);

module.exports = router;
