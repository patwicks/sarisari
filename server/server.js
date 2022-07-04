const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
// app router
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const transactionRoutes = require("./routes/transaction.routes");
// middlewares
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app used routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/transaction", transactionRoutes);

// connect to database

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "database error:"));
db.once("open", () => console.log("Connected to the database!"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App is listening to port ${port}...`));
