const mongoose = require("mongoose");

const selectedSchoolSchema = mongoose.Schema({
  preference1: {
    type: String,
    required: true,
  },
  preference2: {
    type: String,
    required: false,
  },
  preference3: {
    type: String,
    required: false,
  },
  preference4: {
    type: String,
    required: false,
  },
});

module.exports = selectedSchoolSchema;
