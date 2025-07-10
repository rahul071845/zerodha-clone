const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  openingBalance: {
    type: Number,
    default: 0,
  },
  availableMargin: {
    type: Number,
    default: 0,
  },
  usedMargin: {
    type: Number,
    default: 0,
  },
  totalCollateral: {
    type: Number,
    default: 0,
  },
  payin: {
    type: Number,
    default: 0,
  },
  payout: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Fund = mongoose.model("Fund", FundSchema);
module.exports = Fund;
