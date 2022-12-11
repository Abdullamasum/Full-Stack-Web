"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    const sql = "select first_name, phone, city, country, from register where email = 'John@example.com'";
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const getUserById = async (id, res) => {
  try {
    const sql =
      "select first_name, phone, city, country, from register where email = 'John@example.com'"
      + id;
    const [rows] = await promisePool.query(sql);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const addUser = async (register, res) => {
  try {
    const sql = "INSERT INTO register VALUES (null, ?, ?, ?, ?, ?, ?, ?)";
    const values = [register.password, register.first_name, register.phone, register.street, register.city, register.postal_code, register.country];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
};
