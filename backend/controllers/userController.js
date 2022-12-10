// Controller
"use strict";
const userModel = require("../models/userModel");
const users = userModel.user;

const user_list_get = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const user = users.filter((user) => {
    return req.params.user_id == user.id;
  })[0];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  user_list_get,
  getUser,
};
