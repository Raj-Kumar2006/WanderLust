const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Message = require("../models/message");

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to view messages!");
    return res.redirect("/login");
  }
  next();
};

// GET /messages - View user's messages
router.get("/messages", isLoggedIn, wrapAsync(async (req, res) => {
  const messages = await Message.find({ user: req.user._id }).sort({ createdAt: -1 });
  
  // Mark all as read when viewed
  await Message.updateMany({ user: req.user._id, isRead: false }, { $set: { isRead: true } });
  
  res.render("users/messages", { messages });
}));

module.exports = router;
