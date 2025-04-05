const Rating = require("../models/ratingModel");
const { findProductById } = require("./productService");


async function createRating(req,user){
    const product = await findProductById(req.productId);

    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: req.rating,
        createdAt: new Date(),
    }); 

    return await rating.save();
}

async function getAllProductRatings(productId){
    return await Rating.find({product:productId}).populate("user");
}

module.exports = {
    createRating,
    getAllProductRatings
}
