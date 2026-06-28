const mongoose = require("mongoose");
const Listing = require("./models/listing");
require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl, {
    tls: true,
    tlsAllowInvalidCertificates: false,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  });
  console.log("Connected to DB");

  const result = await Listing.updateMany({}, { $set: { category: "Trending" } });
  console.log(`Updated ${result.modifiedCount} listings to be Trending.`);
  
  mongoose.connection.close();
}

main().catch(err => {
  console.error("Error:", err);
  mongoose.connection.close();
});
