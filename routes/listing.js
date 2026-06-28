const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const listingController = require("../controllers/listing");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

//index route
router.get("/listings", wrapAsync(listingController.index));

//new route
router.get("/listings/new", isLoggedIn, listingController.renderNewForm);

//show route
router.get("/listings/:id", wrapAsync(listingController.showListing));

//create Route
router.post(
  "/listings",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing),
);

//Edit Route
router.get(
  "/listings/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing),
);

//Update Route
router.put(
  "/listings/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing),
);

//Delete Route
router.delete(
  "/listings/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deleteListing),
);

module.exports = router;
