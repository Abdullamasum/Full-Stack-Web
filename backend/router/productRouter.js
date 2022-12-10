// Router
"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.product_list_get);
router.get("/:product_id", productController.getProduct);

module.exports = router;
