//asking for the express packages
const express = require("express");

const {
  registerUser,
  loginUser,
  getAllUserDetails,
  getUserDetails,
  deleteUser,
  updateUser,
} = require("../controller/userController");

//getting the router object
const router = express.Router();

//create routes --> function is at the controller
router.post("/register", registerUser);

//login the users
router.post("/login", loginUser);

router.get("/", getAllUserDetails);

router.get("/:id", getUserDetails);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

//export the router object
module.exports = router;
