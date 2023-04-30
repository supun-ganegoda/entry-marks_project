const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter the full name of the child"],
  },

  namewithInitials: {
    type: String,
    required: [true, "Please enter the name of the child with initials"],
  },

  sex: {
    type: String,
    required: true,
  },

  religion: {
    type: String,
    required: true,
  },

  mediumofLearning: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: Date,
    required: true,
  },
});

const applicantSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  namewithInitials: {
    type: String,
    required: true,
  },

  NIC: {
    type: String,
    required: true,
  },

  SriLankan: {
    type: String,
    required: true,
  },

  religion: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  teleNumber: {
    type: Number,
    required: true,
  },

  district: {
    type: String,
    required: true,
  },

  divisionalSecretariat: {
    type: String,
    required: true,
  },

  gramanildariDivision: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    data: {
      childDetails: [childSchema],
      schoolDetails: [applicantSchema],
    },
  },
  { collection: "user-data" }
);

const userDetails = mongoose.model("userDetails", userSchema);

module.exports = userDetails;
