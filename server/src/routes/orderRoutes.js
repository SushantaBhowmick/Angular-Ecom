const express = require('express');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { createOrder, orderHistory, findOrderById } = require('../controllers/orderController');
const router = express.Router();

router.route('/create').post(isAuthenticated,createOrder)
router.route('/user').get(isAuthenticated,orderHistory)
router.route('/:id').get(isAuthenticated,findOrderById)

module.exports = router;