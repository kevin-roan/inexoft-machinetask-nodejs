const express = require("express");
const { connectDB } = require("./config");
const {
  viewAllProducts,
  addProduct,
} = require("./controller/productController");

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  await viewAllProducts().then((response) => {
    console.log("get request");
    res.status(200).json(response);
  });
});

app.post("/products", (req, res) => {
  console.log("put request", req.body);
  addProduct(req.body);
  res.end();
});

app.listen(8000, () => {
  connectDB();
  console.log(`Example app listening on port 8000`);
});
