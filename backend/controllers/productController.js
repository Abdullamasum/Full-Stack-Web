// Controller
"use strict";
const productModel = require("../models/productModel");
const products = productModel.product;

const product_list_get = (req, res) => {
  res.json(products);
};

const getProduct = (req, res) => {
  const product = products.filter((product) => {
    return req.params.product_id == product.id;
  })[0];
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  product_list_get,
  getProduct,
};
