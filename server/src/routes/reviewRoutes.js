const express = require('express');
const { createReview, getAllReviews } = require('../controllers/reviewController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const router = express.Router();

router.route('/create').get(isAuthenticated,createReview)
router.route('/review/productId').get(isAuthenticated,getAllReviews)

module.exports = router;
