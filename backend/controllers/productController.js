// Controller
"use strict";
const productModel = require("../models/productModel");

const product = productModel.product;

const product_list_get = (req, res) => {
  res.json(product);
};

module.exports = {
  product_list_get,
};
