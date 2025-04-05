const express = require('express');
const { findProductById, getAllProducts } = require('../controllers/productcontroller');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/id/:id').get(findProductById);

module.exports = router;
