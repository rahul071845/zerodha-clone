const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");
const Holding = require("../model/Holding");
const Position = require("../model/Position");
const Order = require("../model/Order");

router.get("/", userVerification, async (req, res) => {
  try {
    const userId = req.user._id;

    const holdings = await Holding.find({ userId });
    const positions = await Position.find({ userId });
    const orders = await Order.find({ userId });

    // --- Holdings
    const holdingsCount = holdings.length;
    let investment = 0;
    let currentValue = 0;

    holdings.forEach((h) => {
      investment += h.qty * h.avg;
      currentValue += h.qty * h.price;
    });

    const profitValue = currentValue - investment;
    const profitPercent =
      investment > 0 ? ((profitValue / investment) * 100).toFixed(2) : "0.00";

    // --- Positions
    let marginsUsed = 0;
    let positionPnl = 0;

    positions.forEach((pos) => {
      const entry = pos.qty * pos.avg;
      const current = pos.qty * pos.price;
      marginsUsed += current;
      positionPnl += current - entry;
    });

    // --- Orders
    const orderCount = orders.length;
    const lastOrderDate =
      orders.length > 0 ? orders[orders.length - 1].createdAt : null;

    const summary = {
      marginAvailable: "3.74k",
      marginsUsed: marginsUsed.toFixed(2),
      openingBalance: "3.74k",
      holdingsCount,
      profit: profitValue.toFixed(2),
      profitPercent: `${profitPercent}%`,
      currentValue: currentValue.toFixed(2),
      investment: investment.toFixed(2),
      positionPnl: positionPnl.toFixed(2),
      orderCount,
      lastOrderDate,
    };

    res.status(200).json({ success: true, summary });
  } catch (error) {
    console.error("Summary Error:", error);
    res.status(500).json({ success: false, message: "Error fetching summary" });
  }
});

module.exports = router;
