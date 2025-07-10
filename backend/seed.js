const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Fund = require("./model/Fund");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const userId = "686e8caadaee49515c91d0d4"; // Replace with your user's ID

const seedFund = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const fund = new Fund({
      userId,
      availableMargin: 3740.0,
      usedMargin: 1200.0,
      availableCash: 2540.0,
      openingBalance: 3740.0,
      payin: 0,
      span: 500,
      deliveryMargin: 200,
      exposure: 300,
      optionsPremium: 100,
      collateralLiquid: 250,
      collateralEquity: 100,
    });

    await fund.save();
    console.log("✅ Fund data seeded");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding fund:", err);
    process.exit(1);
  }
};

seedFund();
