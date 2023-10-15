const schoolDetailsModel = require("../models/schoolModel");

const getSuggestions = async (req, res) => {
  const userInput = req.query.input;
  const gender = req.query.gender;
  try {
    let query = {
      Name: { $regex: userInput, $options: "i" },
      $or: [
        { Category: gender },
        { Category: "mix" }, // Include "mix" schools in the query
      ],
    };

    const suggestions = await schoolDetailsModel
      .find(query, { Name: 1, _id: 0 })
      .limit(10);

    const suggestionNames = suggestions.map((suggestion) => suggestion.Name);
    res.json({ suggestions: suggestionNames });
  } catch (error) {
    console.log("Error retrieving suggestions:", error);
    res.status(500).json({ error: "Failed to retrieve suggestions" });
  }
};

//get all school details
const getAllSchoolDetails = async (req, res) => {
  const schools = await schoolDetailsModel
    .find({})
    .select("Name Lat Lng Category");
  res.status(200).json(schools);
};

module.exports = { getSuggestions, getAllSchoolDetails };
