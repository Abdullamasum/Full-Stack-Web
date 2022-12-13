"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./backend/router/productRouter");
const userRouter = require("./backend/router/userRouter");
const authRouter = require("./backend/router/authRoute");
const passport = require("./backend/utils/passport");
const port = 3000;

// serve uploaded files
app.use(express.static("uploads"));
app.use("/thumbnails", express.static("thumbnails"));

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(passport.initialize());

app.use("/auth", authRouter);
app.use(
  "/product",
  passport.authenticate("jwt", { session: false }),
  productRouter
);
app.use("/user", passport.authenticate("jwt", { session: false }), userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
