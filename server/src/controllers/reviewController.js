const { createReview, getAllReviews } = require("../services/reviewService");


exports.createReview = async (req, res) => {
    const user = req.user;

    try {
        const reviewData = await createReview(req.data, user);
        return res.status(201).json({
            success: true,
            msg: "Review created successfully!",
            reviewData
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message
        });
    }
}

exports.getAllReviews = async (req, res) => {

    const { ProductId } = req.params;
    try {
        const reviews= await getAllReviews(ProductId);
        return res.status(200).json({
            success: true,
            reviews
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message
        });
    }
}