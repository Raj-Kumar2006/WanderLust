const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const Listing = require("../models/listing");

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to use Wishlist!");
    return res.redirect("/login");
  }
  next();
};

// POST /wishlist/toggle/:id — add or remove from wishlist
router.post("/wishlist/toggle/:id", isLoggedIn, wrapAsync(async (req, res) => {
  const user = await User.findById(req.user._id);
  const listingId = req.params.id;
  const alreadySaved = user.wishlist.some(id => id.toString() === listingId);

  if (alreadySaved) {
    // Remove from wishlist
    user.wishlist = user.wishlist.filter(id => id.toString() !== listingId);
    await user.save();
    await Listing.findByIdAndUpdate(listingId, { $inc: { wishlistCount: -1 } });
    return res.json({ wishlisted: false });
  } else {
    // Add to wishlist
    user.wishlist.push(listingId);
    await user.save();
    await Listing.findByIdAndUpdate(listingId, { $inc: { wishlistCount: 1 } });
    return res.json({ wishlisted: true });
  }
}));

// GET /wishlist — view user's wishlist
router.get("/wishlist", isLoggedIn, wrapAsync(async (req, res) => {
  const user = await User.findById(req.user._id).populate("wishlist");
  res.render("wishlist/index", { wishlist: user.wishlist });
}));

module.exports = router;
