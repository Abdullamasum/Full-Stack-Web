'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require("./utils/pass");
const app = express();
const port = 3000;

const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/form");
  }
};
const user = {
  username: 'foo',
  password: 'bar'
};
// dont do this
let loggedIn = false;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for form data
app.use(session({
  secret: 'kjsdaöklfnajsadfg34ttVAga',
  saveUninitialized: false,
  resave: true,
  cookie: {maxAge: 60000}
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/form', (req, res) => {
  res.render('form');
});
app.get("/secret", loggedIn, (req, res) => {
  res.render("secret");
});
// app.get('/secret', (req, res) => {
//   if (req.session.loggedIn) {
//     res.render('secret');
//   } else {
//     res.redirect('/form');
//   }
// });
// app.post('/login', (req, res) => {
//   //console.log(req.session);
//   // check for usename/password match
//   if (req.body.username == user.username && req.body.password == user.password){
//     // set session variable
//     req.session.loggedIn = true;
//   } 
//   res.redirect('/secret');
// });
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/form" }),
  (req, res) => {
    console.log("success");
    res.redirect("/secret");
  }
);

app.get('/logout', (req, res) => {
  req.session.loggedIn = false;
  //res.clearCookie('connect.sid'); // cookie for the session
  res.redirect('/');
});


app.get('/getCookie', (req, res) => {
  console.log(req.cookies);
  res.send('your color choice was: ' + req.cookies.color);
});
app.get('/deleteCookie', (req, res) => {
  res.clearCookie('color');
  res.send('Color cookie deleted.');
});
app.get('/setCookie/:color', (req, res) => {
  console.log(req.params.color);
  res.cookie('color', req.params.color);
  res.send('cookie set');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));