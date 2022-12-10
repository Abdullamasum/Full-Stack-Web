// Controller
"use strict";
const productModel = require("../models/productModel");
const products = productModel.product;

const product_list_get = (req, res) => {
  res.json(products);
};

const getProduct = (req, res) => {
  const product = products.filter((product) => {
    return req.params.product_id == product.product_id;
  })[0];
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
};
//ceating a product
const createProduct = (req, res) => {
  const message = `productName:${req.body.product_name}`;
  res.send("product info" + message);
};
//Updating product
const modifyProduct = (req, res) => {};
//deleting a product
const deleteProduct = (req, res) => {};

module.exports = {
  product_list_get,
  getProduct,
  createProduct,
  modifyProduct,
  deleteProduct,
};
