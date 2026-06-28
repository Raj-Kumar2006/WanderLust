const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl, isLoggedIn } = require("../middleware");

const userController = require("../controllers/users");

//signup page
router.get("/signup", userController.renderSignup);

router.post("/signup", wrapAsync(userController.signup));

//login page
router.get("/login", userController.renderLogin);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  userController.login,
);

//logout
router.get("/logout", userController.logout);

//profile
router.get("/profile", isLoggedIn, userController.renderProfile);
router.put("/profile", isLoggedIn, wrapAsync(userController.updateProfile));

module.exports = router;
