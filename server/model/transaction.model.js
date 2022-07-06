const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
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
    required: true
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
