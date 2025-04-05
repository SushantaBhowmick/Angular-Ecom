const express = require('express');
const { addItemToCart, findUserCart } = require('../controllers/cartcontroller');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const router = express.Router();

router.route('/add').post(isAuthenticated, addItemToCart);
router.route('/').get(isAuthenticated, findUserCart);

module.exports = router;