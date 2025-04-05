const Review = require("../models/reviewModel");
const { findProductById } = require("./productService");

async function createReview(reqData, user) {
  const product = await findProductById(reqData.productId);

  const review = new Review({
    product: product._id,
    user: user._id,
    reviews: reqData.review,
    comment: reqData.comment,
    createdAt: new Date(),
  });

  await product.save();
  return await review.save();
}

async function getAllReviews() {
  const product = await findProductById(reqData.productId);

  return await Review.find({ product: product._id }).populate("user");
}


module.exports ={
    createReview,
    getAllReviews
}