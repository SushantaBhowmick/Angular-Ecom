const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { createRating, getAllRatings } = require('../controllers/ratingController');
const router = express.Router();

router.route('/create').post(isAuthenticated,createRating)
router.route('/rating/productId').put(isAuthenticated,getAllRatings)

module.exports = router;
