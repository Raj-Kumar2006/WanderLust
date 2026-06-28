const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Booking = require("../models/booking");
const Review = require("../models/review");

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to access the Host Dashboard!");
    return res.redirect("/login");
  }
  next();
};

// GET /host - Overview Dashboard
router.get("/host", isLoggedIn, wrapAsync(async (req, res) => {
  const now = new Date();

  const listings = await Listing.find({ owner: req.user._id }).populate("reviews");
  const listingIds = listings.map(l => l._id);

  const bookings = await Booking.find({ listing: { $in: listingIds } }).populate("listing user");

  // ── Stats ──────────────────────────────────────────────
  // 1. Total Earnings (all confirmed/completed bookings)
  let totalRevenue = 0;
  bookings.filter(b => b.status !== "cancelled").forEach(b => totalRevenue += b.totalPrice);

  // 2. Upcoming Bookings (checkIn in future & not cancelled)
  const upcomingBookings = bookings.filter(b => new Date(b.checkIn) > now && b.status !== "cancelled");

  // 3. Cancelled Bookings
  const cancelledBookings = bookings.filter(b => b.status === "cancelled");

  // 4. Pending Payouts (checkOut in future & not cancelled — money not yet earned)
  const pendingPayouts = bookings
    .filter(b => new Date(b.checkOut) > now && b.status !== "cancelled")
    .reduce((sum, b) => sum + b.totalPrice, 0);

  // 5. Average Rating across all listings
  let totalRating = 0, totalReviewCount = 0;
  listings.forEach(l => {
    l.reviews.forEach(r => { totalRating += r.rating; totalReviewCount++; });
  });
  const avgRating = totalReviewCount > 0 ? (totalRating / totalReviewCount).toFixed(1) : null;

  // 6. Occupancy Rate: booked nights / (listings * 30 days)
  let bookedNights = 0;
  bookings.filter(b => b.status !== "cancelled").forEach(b => {
    const nights = Math.ceil((new Date(b.checkOut) - new Date(b.checkIn)) / (1000 * 60 * 60 * 24));
    bookedNights += nights;
  });
  const totalAvailableNights = listings.length * 30;
  const occupancyRate = totalAvailableNights > 0 ? Math.min(100, Math.round((bookedNights / totalAvailableNights) * 100)) : 0;

  // 7. Wishlist Saves (sum of wishlistCount across all listings)
  const wishlistSaves = listings.reduce((sum, l) => sum + (l.wishlistCount || 0), 0);

  res.render("host/dashboard", {
    listingsCount: listings.length,
    bookingsCount: bookings.filter(b => b.status !== "cancelled").length,
    totalRevenue,
    totalReviews: totalReviewCount,
    avgRating,
    upcomingBookingsCount: upcomingBookings.length,
    upcomingBookings: upcomingBookings.slice(0, 3),
    cancelledCount: cancelledBookings.length,
    pendingPayouts,
    occupancyRate,
    wishlistSaves,
  });
}));

// GET /host/listings - Manage Listings
router.get("/host/listings", isLoggedIn, wrapAsync(async (req, res) => {
  const listings = await Listing.find({ owner: req.user._id }).populate("reviews");
  res.render("host/listings", { listings });
}));

// GET /host/bookings - Manage Incoming Bookings
router.get("/host/bookings", isLoggedIn, wrapAsync(async (req, res) => {
  const listings = await Listing.find({ owner: req.user._id });
  const listingIds = listings.map(l => l._id);
  
  const bookings = await Booking.find({ listing: { $in: listingIds } })
    .populate("listing user")
    .sort({ createdAt: -1 });

  res.render("host/bookings", { bookings });
}));

// GET /host/reviews - View all reviews for host's listings
router.get("/host/reviews", isLoggedIn, wrapAsync(async (req, res) => {
  const listings = await Listing.find({ owner: req.user._id }).populate("reviews");
  
  // Build a flat list of reviews with their listing info
  let allReviews = [];
  for (let listing of listings) {
    for (let review of listing.reviews) {
      allReviews.push({ review, listing });
    }
  }

  // Sort by newest first
  allReviews.sort((a, b) => new Date(b.review.createdAt) - new Date(a.review.createdAt));

  res.render("host/reviews", { allReviews });
}));

module.exports = router;
