const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Lat: {
      type: String,
      required: true,
    },
    Lng: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    National: {
      type: String,
      required: true,
    },
  },
  { collection: "school-coordinates" }
);

const schoolDetails = mongoose.model("schoolDetails", schoolSchema);

module.exports = schoolDetails;
