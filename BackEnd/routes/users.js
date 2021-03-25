const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  registerValidations,
  loginValidations,
} = require("../config/validation");

//Get Requests
//Login
router.get("/login", (req, res) =>
  res.render("login", { message: req.flash("loginMessage") })
);
//Register
router.get("/register", (req, res) =>
  res.render("register", { message: req.flash("signupMessage") })
);

//Login with Passport
router.post("/login", function (req, res, next) {
  passport.authenticate("login", function (err, user, info) {
    if (err) {
      return res.json(err);
    }
    const { error } = loginValidations(req.body);
    if (error) {
      req.flash("loginMessage", error.details[0].message);
      return res.redirect("/users/login");
      // return res.json(error.details[0].message);
    }
    if (info) {
      // res.status(401);
      req.flash("loginMessage", info.message);
      return res.redirect("/users/login");
      // return res.json(info.message);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("../dashboard");
      // return res.redirect('/users/' + user.username);
      // return res.status(200).json(req.user);
    });
    // createSendToken(req.user, res);
  })(req, res, next);
});

router.post("/register", function (req, res, next) {
  passport.authenticate("register", function (err, user, info) {
    if (err) {
      return res.json(err);
    }
    const { error } = registerValidations(req.body);
    if (error) {
      req.flash("signupMessage", error.details[0].message);
      return res.redirect("/users/register");
      // return res.status(400).json(error.details[0].message);
    }
    if (info) {
      // res.status(401);
      req.flash("signupMessage", info.message);
      //  return res.status(401).json(info.message);
    }
    return res.status(200).json("User created succesfully");
    // createSendToken(req.user, res);
  })(req, res, next);
});
//Logout

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/users/login");
});
module.exports = router;
