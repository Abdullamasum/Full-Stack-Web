"use strict";
// productRoutes
const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");

const upload = multer({ dest: "uploads/" });

router
  .get("/", productController.getProducts)
  .get("/:productId", productController.getProduct)
  .post("/", upload.single("product"), productController.createProduct)
  .put("/", productController.modifyProduct)
  .put("/:productId", productController.modifyProduct)
  .delete("/:productId", productController.deleteProduct);

module.exports = router;
