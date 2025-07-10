const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");
const { Signup, Login } = require("../controller/AuthController");

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/logout", userVerification, (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

router.post("/check", userVerification, (req, res) => {
  res.status(200).json({
    status: true,
    message: "User is authenticated",
    user: req.user,
    exp: req.user.exp,
  });
});

module.exports = router;
