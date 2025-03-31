const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountedPrice: {
      type: Number,
    },
    discountedPercent: {
      type: Number,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    bands: {
      type: String,
    },
    color: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    ratings: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
    sizes: [
      {
        name: { type: String },
        quantity: { type: Number },
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
      },
    ],
    numOfRatings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
