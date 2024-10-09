const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String },
    cost: { type: String },
    availableQuantity: { type: String || Number },
    phoneNumber: { type: String || Number },
  },
  { timestamps: true },
);

const userSchema = new mongoose.Schema(
  {
    productName: { type: String },
    cost: { type: String },
    availableQuantity: { type: String || Number },
    phoneNumber: { type: String || Number },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

const User = mongoose.model("User", userSchema);

module.exports = { Product, User };
