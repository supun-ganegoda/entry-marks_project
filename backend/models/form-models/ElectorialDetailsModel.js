const mongoose = require("mongoose");

const electorialSchema = mongoose.Schema({
  year: {
    type: String,
    required: true,
  },

  district: {
    type: String,
    required: true,
  },

  division: {
    type: String,
    required: true,
  },

  divisionNo: {
    type: String,
    required: true,
  },

  pollingDivision: {
    type: String,
    required: true,
  },

  street: {
    type: String,
    required: true,
  },

  houseHold: {
    type: String,
    required: true,
  },

  serial: {
    type: String,
    required: true,
  },

  electors: {
    type: String,
    required: true,
  },
});

module.exports = electorialSchema;
