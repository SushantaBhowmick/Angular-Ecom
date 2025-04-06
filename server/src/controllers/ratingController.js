const { createRating, getAllProductRatings } = require("../services/ratingService");



exports.createRating = async (req, res) => {
    const user = await req.user;

    try {
        const newRating = await createRating(req.body, user);
        return res.status(201).json({
            success: true,
            msg: "Rating created successfully!",
            rating: newRating,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });
    }
}

exports.getAllRatings = async (req, res) => {
    const { productId } = req.params;
    if (!productId) {
        return res.status(400).json({
            success: false,
            msg: "Product id is required!",
        });
    }

    try {
        const ratings = await getAllProductRatings(productId);
        return res.status(200).json({
            success: true,
            ratings,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });
    }
}