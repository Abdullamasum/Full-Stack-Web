"use strict";
const express = require("express");
const app = express();
const productRouter = require("./backend/router/productRouter");
const userRouter = require("./backend/router/userRouter");

const port = 3000;

app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(port, () => console.log(`Port is listening ${port}`));
