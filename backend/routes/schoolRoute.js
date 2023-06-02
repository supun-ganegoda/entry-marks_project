const express = require("express");

const {
  getSuggestions,
  getAllSchoolDetails,
} = require("../controller/schoolController");

//getting the router object
const router = express.Router();

//create routes --> function is at the controller
router.get("/suggestions", getSuggestions);

//get all schools
router.get("/allschools", getAllSchoolDetails);

module.exports = router;
