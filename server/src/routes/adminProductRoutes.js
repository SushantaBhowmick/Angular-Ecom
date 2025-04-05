const express = require("express");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const {
  createProduct,
  createMultipleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productcontroller");
const router = express.Router();

router.route("/create").post(isAuthenticated, createProduct);
router.route("/creates").post(isAuthenticated, createMultipleProduct);
router.route("/:id").delete(isAuthenticated, deleteProduct);
router.route("/:id").put(isAuthenticated, updateProduct);

module.exports = router;
