const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");

const holdingRouter = require("./routers/holding");
const positionRouter = require("./routers/position");
const orderRouter = require("./routers/order");
const userRouter = require("./routers/user");
const summaryRouter = require("./routers/summary");
const fundRouter = require("./routers/fund");

const allowedOrigins = [process.env.FRONTEND_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use("/holdings", holdingRouter);
app.use("/positions", positionRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);
app.use("/summary", summaryRouter);
app.use("/funds", fundRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});