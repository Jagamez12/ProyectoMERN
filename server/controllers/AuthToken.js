const jwt = require("jsonwebtoken");

function VerifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "No token provided",
    });
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = decode._id;

  next();
}

module.exports = VerifyToken;