"use strict";
const express = require("express");
const app = express();
const productRouter = require("./backend/router/productRouter");

const port = 3000;

app.use('/product', productRouter);

app.listen(port, () => console.log(`Port is listening ${port}`));
