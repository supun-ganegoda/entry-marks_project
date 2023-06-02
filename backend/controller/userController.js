const userDetailsModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//register the users
const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const user = await userDetailsModel.create({
      username: req.body.username,
      email: req.body.email,
      password: newPassword,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//user login
const loginUser = async (req, res) => {
  const user = await userDetailsModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.json({ status: "error", error: "Invalid login" });
  }
  console.log("reqBodypass: ", req.body.password);
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      "entryMarks123"
    );

    return res.status(200).json({ username: user.username, user: token });
  } else {
    return res.status(404).json({ user: false });
  }
};

//user logout
const logoutUser = (req, res) => {
  // localStorage.removeItem("token");
  // const { token } = req.body;
  // tokenBlacklist.add(token); // Assuming `tokenBlacklist` is a set or data structure to store revoked tokens

  return res.status(200).json({ success: true });
};

//get all user details
const getAllUserDetails = async (req, res) => {
  const users = await userDetailsModel.find({}).sort({ createAt: -1 });
  res.status(200).json(users);
};

//get a single user details
const getUserDetails = async (req, res) => {
  const { id } = req.params;
  //check if the ID is valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }
  const tempObj = await userDetailsModel.findById(id);
  if (tempObj) {
    return res.status(200).json(tempObj);
  }
  res.status(404).json({ error: "No such user available!" });
};

//delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  //check the ID is valid ID or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not a valid ID" });
  }
  const tempObj = await userDetailsModel.findOneAndDelete({ _id: id });
  if (!tempObj) {
    res.status(400).json({ error: "No such file" });
  }
  res.status(200).json(tempObj);
};

//update  a user details
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "not a valid ID" });
  }
  //...req.body phase req.body into model
  const tempObj = await userDetailsModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!tempObj) {
    return res.status(400).json({ error: "fail to update user details" });
  }
  res.status(200).json(tempObj);
};

//export the controller
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getAllUserDetails,
  getUserDetails,
  deleteUser,
  updateUser,
};