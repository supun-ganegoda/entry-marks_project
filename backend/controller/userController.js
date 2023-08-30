const userDetailsModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//register the users
const registerUser = async (req, res) => {
  //console.log(req.body);
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
    return res.json({ status: "error", error: "No such user" });
  }
  //console.log("reqBodypass: ", req.body.password);
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

    return res
      .status(200)
      .json({ username: user.username, user: token, email: req.body.email });
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
  try {
    const { email } = req.user;

    const user = await userDetailsModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //console.log(user.marks);
    const userObj = {
      ID: user._id,
      userName: user.username,
      email: user.email,
    };

    res.status(200).json(userObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving marks" });
  }
};

//load applicant details for the verification process
const getApplicantDetails = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userDetailsModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //console.log(user.marks);
    const userObj = user.data.childDetails;

    res.status(200).json(userObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving child details" });
  }
};

//load applicantdetails in applicant details form
const loadApplicantDetails = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userDetailsModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //console.log(user.marks);
    const applicantObj = user.data.applicantDetails;

    res.status(200).json(applicantObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving applicant details" });
  }
};

//load selected schools
const getPrefferedSchools = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userDetailsModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //console.log(user.marks);
    const userObj = user.data.selectedSchoolDetails;

    res.status(200).json(userObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving preffered schools" });
  }
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

/*---------------------------------------------------------------------------------------------- 
------------------------------------------------------------------------------------------------*/
//save child details form
const submitChildDetails = async (req, res) => {
  //console.log("request received");
  try {
    const { fullName, initials, religion, gender, medium, birth } = req.body;
    const { email } = req.user;

    // Update child details in the user document
    await userDetailsModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      {
        $set: {
          "data.childDetails": {
            fullName,
            initials,
            religion,
            gender,
            medium,
            birth,
          },
        },
      }
    );
    res.status(200).json({ message: "Child details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating child details" });
  }
};

//save applicant-details form
const submitApplicantDetails = async (req, res) => {
  //console.log("request received");
  try {
    const {
      apFullName,
      apInitials,
      apNIC,
      apSriLankan,
      apReligion,
      apAddressLine1,
      apAddressLine2,
      apAddressLine3,
      apLatLng,
      apTeleNumber,
      apDistrict,
      apDivisionalSecretariat,
      apGramanildariDivision,
      spFullName,
      spInitials,
      spNIC,
      spSriLankan,
      spReligion,
      spAddress,
      spTeleNumber,
      spDistrict,
      spDivisionalSecretariat,
      spGramanildariDivision,
    } = req.body;
    const { email } = req.user;

    // Update child details in the user document
    await userDetailsModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      {
        $set: {
          "data.applicantDetails": {
            apFullName,
            apInitials,
            apNIC,
            apSriLankan,
            apReligion,
            apAddressLine1,
            apAddressLine2,
            apAddressLine3,
            apLatLng,
            apTeleNumber,
            apDistrict,
            apDivisionalSecretariat,
            apGramanildariDivision,
            spFullName,
            spInitials,
            spNIC,
            spSriLankan,
            spReligion,
            spAddress,
            spTeleNumber,
            spDistrict,
            spDivisionalSecretariat,
            spGramanildariDivision,
          },
        },
      }
    );
    res.status(200).json({ message: "Applicant details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating applicant details" });
  }
};

//save selected schools to the database
const saveSelectedSchools = async (req, res) => {
  try {
    const {
      0: preference1,
      1: preference2,
      2: preference3,
      3: preference4,
    } = req.body;

    const { email } = req.user;
    // console.log(req.user);
    await userDetailsModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      {
        $set: {
          "data.selectedSchoolDetails": {
            preference1,
            preference2,
            preference3,
            preference4,
          },
        },
      }
    );
    res.status(200).json({ message: "Schools saved successfully" });
  } catch (e) {
    console.log(e);
  }
};

//save electorial details into the database
const submitElectorialDetails = async (req, res) => {
  try {
    const {
      year,
      district,
      division,
      divisionNo,
      pollingDivision,
      street,
      houseHold,
      serial,
      electors,
    } = req.body;
    const { email } = req.user;

    // Update child details in the user document
    await userDetailsModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      {
        $set: {
          "data.electorialDetails": {
            year,
            district,
            division,
            divisionNo,
            pollingDivision,
            street,
            houseHold,
            serial,
            electors,
          },
        },
      }
    );
    res
      .status(200)
      .json({ message: "Electorial details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating electorial details" });
  }
};

//load electorial details from the database
const loadElectorialDetails = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userDetailsModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //console.log(user.marks);
    const electorialDetailsObj = user.data.electorialDetails;

    res.status(200).json(electorialDetailsObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving electorial details" });
  }
};

//save marks to the database
const saveMarks = async (req, res) => {
  let marksObj = {
    proximity: null,
    pastPupils: null,
    cousins: null,
    staff: null,
    officers: null,
    forign: null,
  };
  //console.log(req.body);
  try {
    marksObj.proximity = req.body.proximity;
    marksObj.pastPupils = req.body.pastPupils;
    marksObj.cousins = req.body.cousins;
    marksObj.staff = req.body.staff;
    marksObj.officers = req.body.officers;
    marksObj.forign = req.body.forign;
    const { email } = req.user;
    await userDetailsModel.findOneAndUpdate(
      { email: email }, // Find the document by email
      {
        $set: {
          marks: marksObj,
        },
      }
    );
    res.status(200).json({ message: "Saved successfully !" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving marks" });
  }
};

//retrive marks from the database
const getMarks = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userDetailsModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //console.log(user.marks);
    const marksObj = {
      proximity: user.marks.proximity,
      pastPupils: user.marks.pastPupils,
      cousins: user.marks.cousins,
      staff: user.marks.staff,
      officers: user.marks.officers,
      forign: user.marks.forign,
    };

    res.status(200).json(marksObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving marks" });
  }
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
  submitChildDetails,
  submitApplicantDetails,
  saveSelectedSchools,
  submitElectorialDetails,
  saveMarks,
  getMarks,
  loadApplicantDetails,
  getApplicantDetails,
  loadElectorialDetails,
  getPrefferedSchools,
};
