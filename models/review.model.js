const mongoose = require("mongoose");
const userDb = require("./user.model");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userDb",
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
