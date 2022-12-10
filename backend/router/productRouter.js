// Router
"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.product_list_get);
router.get("/:product_id", productController.getProduct);
router.put("/", productController.createProduct);
router.delete("/", (req, res) => {
  res.send("Deleting product");
});
router.post("/", (req, res) => {
  res.send("updating product");
});

module.exports = router;
