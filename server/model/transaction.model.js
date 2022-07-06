const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    cart: {
      type: Array,
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);