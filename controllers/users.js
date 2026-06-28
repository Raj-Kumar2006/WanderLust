const User = require("../models/user");

module.exports.renderSignup = (req, res) => {
  res.render("users/signup");
};

module.exports.signup = async (req, res) => {
  try {
    let { email, username, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome Back!");
  res.redirect(res.locals.redirectUrl || "/listings");
};

module.exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect("/listings");
  });
};

module.exports.renderProfile = (req, res) => {
  res.render("users/profile", { user: req.user });
};

module.exports.updateProfile = async (req, res) => {
  const { firstName, lastName, phone, bio } = req.body.user;
  const user = await User.findByIdAndUpdate(req.user._id, { firstName, lastName, phone, bio });
  req.flash("success", "Profile updated successfully!");
  res.redirect("/profile");
};
