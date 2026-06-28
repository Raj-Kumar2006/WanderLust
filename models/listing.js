const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    url: String,
    filename: String,
  },
  category: {
    type: [String],
    enum: ["Trending", "Mountains", "Beach", "Nature", "City", "Arctic", "Camping", "Historic", "Rooms", "Hotels", "Beachfront", "Pool", "Spa", "Countryside", "Apartments", "Igloos", "Modern", "Castles", "Villas", "Glamping", "Lakefront", "Boats", "Luxury", "Skiing"],
    default: ["Trending"]
  },

  price: Number,
  location: String,
  country: String,

  lat: Number,
  lng: Number,

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  wishlistCount: {
    type: Number,
    default: 0
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
