const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  phone: String,
  bio: String,
  wishlist: [{
    type: Schema.Types.ObjectId,
    ref: "Listing"
  }],
});

userSchema.plugin(passportLocalMongoose.default);

module.exports = mongoose.model("User", userSchema);
