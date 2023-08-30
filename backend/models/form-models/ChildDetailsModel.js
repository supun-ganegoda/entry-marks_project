const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter the full name of the child"],
  },

  initials: {
    type: String,
    required: [true, "Please enter the name of the child with initials"],
  },

  gender: {
    type: String,
    required: true,
  },

  religion: {
    type: String,
    required: true,
  },

  medium: {
    type: String,
    required: true,
  },

  birth: {
    type: String,
    required: true,
  },
});

module.exports = childSchema;
