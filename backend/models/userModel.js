const mongoose = require("mongoose");
const childSchema = require("./form-models/ChildDetailsModel");
const applicantSchema = require("./form-models/ApplicantDetailsModel");
const selectedSchoolSchema = require("./form-models/SelectedSchoolsModel");
const electorialSchema = require("./form-models/ElectorialDetailsModel");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    data: {
      childDetails: [childSchema],
      applicantDetails: [applicantSchema],
      selectedSchoolDetails: [selectedSchoolSchema],
      electorialDetails: [electorialSchema],
    },
  },
  { collection: "user-data" }
);

const userDetails = mongoose.model("userDetails", userSchema);

module.exports = userDetails;
