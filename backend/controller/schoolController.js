const schoolDetailsModel = require("../models/schoolModel");

const getSuggestions = async (req, res) => {
  const userInput = req.query.input;

  try {
    const suggestions = await schoolDetailsModel
      .find({ Name: { $regex: userInput, $options: "i" } }, { Name: 1, _id: 0 })
      .limit(10);

    const suggestionNames = suggestions.map((suggestion) => suggestion.Name);
    res.json({ suggestions: suggestionNames });
  } catch (error) {
    console.log("Error retrieving suggestions:", error);
    res.status(500).json({ error: "Failed to retrieve suggestions" });
  }
};

module.exports = { getSuggestions };
