"use strict";
const { rawListeners } = require("../database/db");
const productModel = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await productModel.getAllProducts(res);
  res.json(products);
};

const getProduct = async (req, res) => {
  // choose only one object with matching id
  const product = await productModel.getProductById(res, req.params.productId);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
};

const createProduct = async (req, res) => {
  const product = req.body;
  product.product_media = req.file.product_media;
  console.log("creating a new product:", product);
  const productId = await productModel.addProduct(product, res);
  res.status(201).json({ productId });
};

const modifyProduct = async (req, res) => {
  const product = req.body;
  if (req.params.productId) {
    product.product_id = req.params.productId;
  }
  const result = await productModel.updateProductById(product, res);
  if (result.affectedRows > 0) {
    res.json({ message: "product modified: " + product.product_id });
  } else {
    res.status(404).json({ message: "nothing changed" });
  }
};

const deleteProduct = async (req, res) => {
  const result = await productModel.deleteProductById(
    req.params.productId,
    res
  );
  console.log("product deleted", result);
  if (result.affectedRows > 0) {
    res.json({ message: "product deleted" });
  } else {
    res.status(404).json({ message: "product was already deleted" });
  }
};

module.exports = {
  getProduct,
  getProducts,
  modifyProduct,
  createProduct,
  deleteProduct,
};
