const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { updateCartItem, removeCartItem } = require('../controllers/cartItemController');
const router = express.Router();

router.route('/:id').put(isAuthenticated,updateCartItem)
router.route('/:id').delete(isAuthenticated,removeCartItem)

module.exports = router;