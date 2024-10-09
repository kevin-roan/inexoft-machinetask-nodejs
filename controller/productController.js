const { Product, User } = require("../models/productModel");

const viewAllProducts = async () => {
  try {
    const result = await Product.find();
    return { status: true, result: result };
  } catch (error) {
    return { status: false, result: null, message: error };
  }
};

const addProduct = async (productData) => {
  console.log("add request from controller");
  try {
    const product = new User(productData);
    const savedProduct = await product.save();
    if (savedProduct) {
      console.log("Added product successfully");
      return { status: true, message: "Added product" };
    }
  } catch (error) {
    console.log("error adding product", error);
  }
};

module.exports = { viewAllProducts, addProduct };
