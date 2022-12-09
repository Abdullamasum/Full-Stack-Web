"use strict";
const express = require("express");
const app = express();
const productRouter = require("./backend/router/productRouter");

const port = 3000;

app.use("/backend", express.static("productRouter"));

app.listen(port, () => console.log(`Port is listenoing ${port}`));
