const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../utils/constants");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    // console.log(token);
    const decoded = jwt.verify(token, JWT_KEY);
    // console.log(decoded)
    req.userId = decoded.userId; // pass userId to controller
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token from middleware" });
  }
};

module.exports = { verifyToken };
