const mongoose = require("mongoose");

const applicantSchema = mongoose.Schema({
  apFullName: {
    type: String,
    required: true,
  },

  apInitials: {
    type: String,
    required: true,
  },

  apNIC: {
    type: String,
    required: true,
  },

  apSriLankan: {
    type: String,
    required: true,
  },

  apReligion: {
    type: String,
    required: true,
  },

  apAddressLine1: {
    type: String,
    required: true,
  },
  apAddressLine2: {
    type: String,
    required: true,
  },
  apAddressLine3: {
    type: String,
    required: true,
  },

  apLatLng: {
    type: String,
    required: true,
  },

  apTeleNumber: {
    type: Number,
    required: true,
  },

  apDistrict: {
    type: String,
    required: true,
  },

  apDivisionalSecretariat: {
    type: String,
    required: true,
  },

  apGramanildariDivision: {
    type: String,
    required: true,
  },

  //details of spouse
  spFullName: {
    type: String,
    required: true,
  },

  spInitials: {
    type: String,
    required: true,
  },

  spNIC: {
    type: String,
    required: true,
  },

  spSriLankan: {
    type: String,
    required: true,
  },

  spReligion: {
    type: String,
    required: true,
  },

  spAddress: {
    type: String,
    required: true,
  },

  spTeleNumber: {
    type: Number,
    required: true,
  },

  spDistrict: {
    type: String,
    required: true,
  },

  spDivisionalSecretariat: {
    type: String,
    required: true,
  },

  spGramanildariDivision: {
    type: String,
    required: true,
  },
});

module.exports = applicantSchema;
