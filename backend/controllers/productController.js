"use strict";
const { rawListeners } = require("../database/db");
const productModel = require("../models/productModel");
const {validationResult} = require('express-validator');
const {makeThumbnail, getCoordinates} = require('../utils/image');
// const products = productModel.products;

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
  const errors = validationResult(req);
  if (!req.file) {
    res.status(400).json({message: 'file missing or invalid'});
  }
    else if (errors.isEmpty()) {
      const product = req.body;
      await makeThumbnail(req.file.path, req.file.filename);
      product.coords = JSON.stringify(await getCoordinates(req.file.path));

      product.
      product.filename = req.file.filename;
      console.log("creating a new product:", product);
      const productId = await productModel.addProduct(product, res);
      res.status(201).json({message: 'product created: ', productId });
  } else {
    console.log('validation errors', errors);
    res.status(400).json({message: 'product creation failed',});
};

// const createProduct = async(req, res) => {
//   console.log('creating a new product', req.body, req.file);
  
//   const productId = await productModel.addProduct(req);
//   const product = await productModel.getProductById(productId);
//   res.send(product);

 };

const modifyProduct = async (req, res) => {
  const product = req.body;
  if (req.params.productId) {
    product.id = req.params.productId;
  }
  const result = await productModel.updateProductById(product, res);
  if (result.affectedRows > 0) {
    res.json({ message: "product modified: " + product.id });
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
