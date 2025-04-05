const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    product: { type: Schema.Types.ObjectId, ref: "products", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("ratings", ratingSchema);
module.exports = Rating
