"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllProducts = async (res) => {
  try {
    const sql =
      "select id, user_id, details, name, category from product join userinfo on product.user_id = userinfo.userid";
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
      "SELECT * FROM product WHERE id = ?",
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
    const sql = "INSERT INTO product VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      product.id,
      product.user_id,
      product.details,
      product.name,
      product.filename,
      product.category,
    ];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

// const addProduct = async(req) => {
//   try {
//     const [rows, fields] = await promisePool.query(
//         'INSERT INTO product (product_user_id, product_details, product_name, product_media, product_category) VALUES (?, ?, ?, ?, ?);',
//         [
        
//           req.body.product_user_id,
//           req.body.product_details,
//           req.body.product_name,
//           req.body.product_media,
//           req.body.product_category]);
//     console.log('productModel add:', rows, fields);
//     return rows.insertId;
//   } catch (e) {
//     console.error('productModel addProduct:', e);
//     return 0;
//   }
// };

const deleteProductById = async (productId, res) => {
  try {
    const [rows] = await promisePool.query(
      "DELETE FROM product WHERE id = ?",
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
      "UPDATE product SET details = ?, name = ?, filename = ?, category = ? " +
      "WHERE id = ?";
    const values = [
      product.details,
      product.name,
      product.filename,
      product.category,

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
