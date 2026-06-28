const Listing = require("../models/listing");
const User = require("../models/user");

module.exports.index = async (req, res) => {
  let { category, location } = req.query;
  let searchQuery = location || '';

  // Make Trending the default view if no filters are applied
  if (!category && !location) {
    category = "Trending";
  }

  let query = {};
  if (category) query.category = { $in: [category] };
  if (location) {
    // Search across title, location, and country
    const searchRegex = { $regex: location.trim(), $options: "i" };
    query.$or = [
      { title: searchRegex },
      { location: searchRegex },
      { country: searchRegex }
    ];
  }

  const allListings = await Listing.find(query);

  // Get logged-in user's wishlist IDs for heart icons
  let wishlistIds = [];
  if (req.user) {
    const user = await User.findById(req.user._id).select("wishlist");
    wishlistIds = user.wishlist.map(id => id.toString());
  }

  res.render("listings/index.ejs", { allListings, category: category || '', location: location || '', searchQuery, wishlistIds });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("reviews")
    .populate("owner");
  if (!listing) {
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  // Build category array: always include Trending + the selected category
  const selectedCategory = req.body.listing.category;
  let categories = ["Trending"];
  if (selectedCategory && selectedCategory !== "Trending" && !categories.includes(selectedCategory)) {
    categories.push(selectedCategory);
  }
  newListing.category = categories;

  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  } else if (req.body.listing.imageUrl) {
    newListing.image = {
      url: req.body.listing.imageUrl,
      filename: "listingimage",
    };
  }

  // If coordinates are missing, default to New Delhi
  if (!newListing.lat || !newListing.lng) {
    newListing.lat = 28.6139;
    newListing.lng = 77.2090;
  }

  await newListing.save();
  req.flash("success", "Successfully new Listing Created!");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let updatedData = req.body.listing;
  
  // If coordinates are missing, default to New Delhi
  if (!updatedData.lat || !updatedData.lng) {
    updatedData.lat = 28.6139;
    updatedData.lng = 77.2090;
  }
  
  let listing = await Listing.findByIdAndUpdate(id, updatedData);

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Successfully Updated!");
  res.redirect(`/listings/${id}`);
};

/*
  if (!listing) { // This check should ideally happen before update or via error handling
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }
*/

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully Deleted!");
  res.redirect("/listings");
};
