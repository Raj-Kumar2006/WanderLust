const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");
const { isLoggedIn, isReviewAuthor } = require("../middleware");
const { validateReview } = require("../middleware");

const reviewController = require("../controllers/review");

//Post Review
router.post(
  "/listings/:id/reviews",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//Review Delete
router.delete(
  "/listings/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
