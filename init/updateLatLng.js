const mongoose = require("mongoose");
const Listing = require("../models/listing");

async function updateListings() {
  try {
    // Connect to MongoDB (adjust connection string as needed)
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

    console.log("Connected to MongoDB");

    // Update all listings that have undefined or null lat/lng
    const result = await Listing.updateMany(
      {
        $or: [
          { lat: { $exists: false } },
          { lat: null },
          { lng: { $exists: false } },
          { lng: null },
        ],
      },
      {
        lat: 20.5937, // Center of India
        lng: 78.9629,
      }
    );

    console.log(`Updated ${result.modifiedCount} listings with default coordinates`);

    // Close the connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error updating listings:", error);
  }
}

// Run the update function
updateListings();
