const mongoose = require("mongoose");

const electorialSchema = mongoose.Schema({
  electorialYear: {
    type: String,
    required: true,
  },

  electorialDistrict: {
    type: String,
    required: true,
  },

  gramaNiladariDiv: {
    type: String,
    required: true,
  },

  gramaNiladariNo: {
    type: String,
    required: true,
  },

  streetRoadVillage: {
    type: String,
    required: true,
  },

  electorialOne: [
    {
      householdNo: {
        type: String,
        required: false,
      },
      serialNo: {
        type: String,
        required: false,
      },
      nameOfElectors: {
        type: Number,
        required: false,
      },
    },
  ],

  electorialTwo: [
    {
      householdNo: {
        type: String,
        required: false,
      },
      serialNo: {
        type: String,
        required: false,
      },
      nameOfElectors: {
        type: Number,
        required: false,
      },
    },
  ],

  electorialThree: [
    {
      householdNo: {
        type: String,
        required: false,
      },
      serialNo: {
        type: String,
        required: false,
      },
      nameOfElectors: {
        type: Number,
        required: false,
      },
    },
  ],

  electorialFour: [
    {
      householdNo: {
        type: String,
        required: false,
      },
      serialNo: {
        type: String,
        required: false,
      },
      nameOfElectors: {
        type: Number,
        required: false,
      },
    },
  ],

  electorialFive: [
    {
      householdNo: {
        type: String,
        required: false,
      },
      serialNo: {
        type: String,
        required: false,
      },
      nameOfElectors: {
        type: Number,
        required: false,
      },
    },
  ],
});

module.exports = electorialSchema;
