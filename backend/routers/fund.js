const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");
const Fund = require("../model/Fund");

router.get("/", userVerification, async (req, res) => {
  try {
    const userId = req.user._id;
    const fund = await Fund.findOne({ userId });

    if (!fund) {
      return res.status(404).json({ success: false, message: "No fund data found" });
    }

    res.status(200).json({ success: true, fund });
  } catch (err) {
    console.error("Error fetching fund data:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/add", userVerification, async (req, res) => {
  const userId = req.user._id;
  const { amount } = req.body;

  try {
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }

    const fund = await Fund.findOne({ userId });

    if (!fund) {
      return res.status(404).json({ success: false, message: "Fund not found" });
    }

    fund.availableMargin += amount;
    fund.availableCash += amount;
    fund.payin += amount;

    await fund.save();

    res.status(200).json({ success: true, message: "Funds added successfully", fund });
  } catch (err) {
    console.error("Add funds error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/withdraw", userVerification, async (req, res) => {
  try {
    const { amount } = req.body;
    const userId = req.user._id;

    if (!amount || amount <= 0)
      return res.status(400).json({ success: false, message: "Invalid amount" });

    const fund = await Fund.findOne({ userId });
    if (!fund)
      return res.status(404).json({ success: false, message: "No fund found" });

    if (fund.availableMargin < amount)
      return res.status(400).json({ success: false, message: "Insufficient margin" });

    fund.availableMargin -= amount;
    fund.availableCash -= amount;
    await fund.save();

    res.status(200).json({ success: true, fund });
  } catch (err) {
    console.error("Withdraw error:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


module.exports = router;
