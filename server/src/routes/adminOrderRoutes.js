const express = require('express');
const { confirmOrder, getAllOrders, shippedOrder, deliverOrder, deleteOrder, cancelOrder } = require('../controllers/adminOrderController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const router = express.Router();

router.route('/').get(isAuthenticated, getAllOrders);
router.route('/:orderId/confirmed').put(isAuthenticated,confirmOrder);
router.route('/:orderId/shipped').put(isAuthenticated,shippedOrder);
router.route('/:orderId/delivered').put(isAuthenticated,deliverOrder);
router.route('/:orderId/cancel').put(isAuthenticated,cancelOrder);
router.route('/:orderId/delete').put(isAuthenticated,deleteOrder);

module.exports = router;