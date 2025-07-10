const express = require("express");
const router = express.Router();
const Order = require("../model/Order");
const {userVerification} = require("../middlewares/AuthMiddleware");

router.post("/new", userVerification, async (req, res) => {
  try {
    const newOrder = new Order({
      userId: req.user._id,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    console.log(`Order for ${req.body.name} added by ${req.user._id}`);
    res.status(200).json({ message: "Order added successfully" });
  } catch (err) {
    console.error("Error adding order:", err);
    res.status(500).json({ message: "Error adding order" });
  }
});

router.get("/user", userVerification, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error("Fetch Orders Error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
});

module.exports = router;