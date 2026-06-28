require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const categories = ["Trending", "Mountains", "Beach", "Nature", "City", "Arctic", "Camping", "Historic", "Rooms", "Hotels", "Beachfront", "Pool", "Spa", "Countryside", "Apartments", "Igloos", "Modern", "Castles", "Villas", "Glamping", "Lakefront", "Boats", "Luxury", "Skiing"];

async function updateListings() {
  await mongoose.connect(process.env.ATLASDB_URL);
  console.log("Connected to DB");

  const listings = await Listing.find();
  for (let listing of listings) {
    if (!listing.category) {
      listing.category = categories[Math.floor(Math.random() * categories.length)];
      await listing.save();
    }
  }

  console.log("Finished updating listings");
  process.exit(0);
}

updateListings().catch(err => {
  console.error(err);
  process.exit(1);
});
