"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllProducts = async (res) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner's name as ownername (from wop_user table).
    const sql =
      "select product_id, product_user_id, product_details, product_name, product_category from product join userinfo on product.product_user_id = userinfo.userid";
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const getProductById = async (res, productId) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM product WHERE product_id = ?",
      [productId]
    );
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const addProduct = async (product, res) => {
  try {
    //console.log('addProduct():', product)
    const sql = "INSERT INTO product VALUES (null, ?, ?, ?, ?, ?)";
    const values = [
      // product.product_id,

      product.product_user_id,
      product.product_details,
      product.product_name,
      product.product_media,
      product.product_category,
    ];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const deleteProductById = async (productId, res) => {
  try {
    const [rows] = await promisePool.query(
      "DELETE FROM product WHERE product_id = ?",
      [productId]
    );
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

const updateProductById = async (product, res) => {
  try {
    console.log("Modify product:", product);
    const sql =
      "UPDATE product SET product_details = ?, product_name = ?, product_media = ?, product_category = ? " +
      "WHERE product_id = ?";
    const values = [
      // product.product_id,
      product.product_details,
      product.product_name,
      product.product_media,
      product.product_category,
      product.productId,
    ];
    const [rows] = await promisePool.query(sql, values);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  updateProductById,
};
