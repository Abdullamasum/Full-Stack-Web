/* "use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllUsers = async (res) => {
  try {
    const sql = "select first_name, phone, city, country from register where email != 123";
    const [rows] = await promisePool.query(sql);
    return rows;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const getUserById = async (email, res) => {
  try {
    const sql =
      "select first_name, phone, city, country, from register where email !=123" + email;
    const [rows] = await promisePool.query(sql);
    return rows[0];
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const addUser = async (register, res) => {
  try {
    const sql = "INSERT INTO register VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [register.email, register.password, register.first_name, register.phone, register.street, register.city, register.postal_code, register.country];
    const [result] = await promisePool.query(sql, values);
    return result.insertId;
  } catch (e) {
    console.error("error", e.message);
    res.status(500).send(e.message);
  }
};
const getUserLogin = async (params) => {
  try {
    console.log(params);
    const [rows] = await promisePool.execute(
        'SELECT * FROM register WHERE email = ?;',
        params);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  getUserLogin,
};
 */
