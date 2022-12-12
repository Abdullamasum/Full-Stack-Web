// Router
"use strict";
const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/token", userController.checkToken);
router.get("/:user_id", userController.getUser);


router.post("/", userController.createUser);
router.put("/", userController.modifyUser);
router.delete("/", userController.deleteUser);

module.exports = router;
