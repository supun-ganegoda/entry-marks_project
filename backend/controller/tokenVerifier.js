const jwt = require("jsonwebtoken");

// Verify the token
const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the token using the secret key
    const splitToken = token.split(" ")[1];
    const decoded = jwt.verify(splitToken, "entryMarks123");
    //console.log(splitToken);

    // Extract the user email from the decoded token
    const { email } = decoded;

    // Attach the email to the req.user object
    req.user = { email };

    // Continue to the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
