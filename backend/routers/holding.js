const express = require("express");
const router = express.Router();
const Holding = require("../model/Holding");
const {userVerification} = require("../middlewares/AuthMiddleware");

router.get("/all", userVerification, async (req, res) => {
  try {
    const holdings = await Holding.find({ userId: req.user._id });
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

module.exports = router;