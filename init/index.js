const mongoose = require("mongoose");
require("dotenv").config();
const initData = require("./data");
const Listing = require("../models/listing");

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "69819f6cb0092d21dd2cc0a5",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
