const mongoose = require("mongoose");

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

module.exports = applicantSchema;
