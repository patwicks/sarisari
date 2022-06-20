const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  item_code: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
