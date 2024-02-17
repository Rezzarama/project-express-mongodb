const mongoose = require("mongoose");

const productScema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Baju", "Celana", "Jaket", "Aksesoris"],
  },
});

const Product = mongoose.model("Product", productScema);

module.exports = Product;
