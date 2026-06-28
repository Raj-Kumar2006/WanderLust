const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing");
const Booking = require("../models/booking");
const Message = require("../models/message");

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create a booking!");
    return res.redirect("/login");
  }
  next();
};

// POST /listings/:id/bookings/payment - Show payment page
router.post("/listings/:id/bookings/payment", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const { checkIn, checkOut, guests, totalPrice } = req.body;

  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  if (listing.owner.equals(req.user._id)) {
    req.flash("error", "You cannot book your own listing!");
    return res.redirect(`/listings/${id}`);
  }

  res.render("bookings/payment", { listing, checkIn, checkOut, guests, totalPrice });
}));

// POST /listings/:id/bookings - Create a booking
router.post("/listings/:id/bookings", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const { checkIn, checkOut, guests, totalPrice } = req.body;

  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  // Ensure owner cannot book their own listing
  if (listing.owner.equals(req.user._id)) {
    req.flash("error", "You cannot book your own listing!");
    return res.redirect(`/listings/${id}`);
  }

  const newBooking = new Booking({
    listing: id,
    user: req.user._id,
    checkIn: new Date(checkIn),
    checkOut: new Date(checkOut),
    guests: guests,
    totalPrice: totalPrice
  });

  await newBooking.save();

  // Create a system message for booking confirmation
  const checkInDate = new Date(checkIn).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  const checkOutDate = new Date(checkOut).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  await new Message({
    user: req.user._id,
    title: "✅ Booking Confirmed",
    content: `Your booking for "${listing.title}" in ${listing.location} has been confirmed! Check-in: ${checkInDate}, Checkout: ${checkOutDate}, Guests: ${guests}, Total: ₹${Number(totalPrice).toLocaleString("en-IN")}.`
  }).save();

  req.flash("success", "Booking confirmed successfully!");
  res.redirect(`/trips/${newBooking._id}`);
}));

// GET /trips - View user's bookings
router.get("/trips", isLoggedIn, wrapAsync(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate("listing").sort({ createdAt: -1 });
  res.render("users/trips", { bookings });
}));

// GET /trips/:id - View specific trip details
router.get("/trips/:id", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id).populate("listing");
  
  if (!booking || !booking.user.equals(req.user._id)) {
    req.flash("error", "Booking not found or you don't have permission to view it.");
    return res.redirect("/trips");
  }

  res.render("users/trip-details", { booking });
}));

// DELETE /bookings/:id - Cancel a booking
router.delete("/bookings/:id", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id);

  if (!booking || !booking.user.equals(req.user._id)) {
    req.flash("error", "Booking not found or you don't have permission to cancel it.");
    return res.redirect("/trips");
  }

  // Create a system message for booking cancellation
  const listing = await Listing.findById(booking.listing);
  const listingTitle = listing ? listing.title : "Unknown Listing";
  const listingLocation = listing ? listing.location : "";
  await new Message({
    user: req.user._id,
    title: "❌ Booking Cancelled",
    content: `Your booking for "${listingTitle}"${listingLocation ? " in " + listingLocation : ""} has been cancelled. ₹${booking.totalPrice.toLocaleString("en-IN")} will be refunded to your account.`
  }).save();

  await Booking.findByIdAndDelete(id);
  req.flash("success", "Booking cancelled successfully.");
  res.redirect("/trips");
}));

module.exports = router;
