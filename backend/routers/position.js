const express = require("express");
const router = express.Router();
const Position = require("../model/Position");
const {userVerification} = require("../middlewares/AuthMiddleware");

router.get("/all", userVerification, async (req, res) => {
  try {
    const userId = req.user._id;
    const positions = await Position.find({ userId });
    res.status(200).json(positions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;