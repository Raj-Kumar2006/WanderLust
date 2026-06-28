const mongoose = require("mongoose");
const Listing = require("./models/listing");
require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl, {
    tls: true,
    tlsAllowInvalidCertificates: false,
  });
  console.log("Connected to DB");

  const listings = await Listing.find({});
  let updated = 0;

  for (let listing of listings) {
    // If category is a string (old format), convert to array
    if (typeof listing.category === "string") {
      listing.category = listing.category ? ["Trending", listing.category].filter((v, i, a) => a.indexOf(v) === i) : ["Trending"];
      await listing.save();
      updated++;
    } 
    // If category is an array but doesn't contain "Trending", add it
    else if (Array.isArray(listing.category) && !listing.category.includes("Trending")) {
      listing.category.unshift("Trending");
      await listing.save();
      updated++;
    }
    // If category is empty or null, set to ["Trending"]
    else if (!listing.category || listing.category.length === 0) {
      listing.category = ["Trending"];
      await listing.save();
      updated++;
    }
  }

  console.log(`Updated ${updated} listings to use category array with Trending.`);
  mongoose.connection.close();
}

main().catch(console.error);
