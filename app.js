"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./backend/router/productRouter");
<<<<<<< HEAD
/* const userRouter = require("./backend/router/userRouter"); */

const port = 3000;
//upload
app.use(express.static("uploads"));

=======
const userRouter = require("./backend/router/userRouter");
const authRouter = require('./backend/router/authRoute');
const passport = require('./backend/utils/passport');
const port = 3000;

app.use(express.static('uploads'));
>>>>>>> 45a9794a6fbdb51784b7ef66b4595063bbb6f4b2
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
app.use(passport.initialize());

<<<<<<< HEAD
app.use("/product", productRouter);
/* app.use("/user", userRouter); */
=======
app.use('/auth', authRouter)
app.use("/product", passport.authenticate('jwt', {session: false}), productRouter);
app.use("/user", passport.authenticate('jwt', {session: false}), userRouter);
>>>>>>> 45a9794a6fbdb51784b7ef66b4595063bbb6f4b2

app.listen(port, () => console.log(`Port is listening ${port}`));
