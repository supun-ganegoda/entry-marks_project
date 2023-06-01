const express = require("express");

const { getSuggestions } = require("../controller/schoolController");

//getting the router object
const router = express.Router();

//create routes --> function is at the controller
router.get("/suggestions", getSuggestions);

module.exports = router;
