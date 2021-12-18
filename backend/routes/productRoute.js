const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const { isAuthenticatdUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/product/new").post(isAuthenticatdUser, authorizeRoles("admin"), createProduct);

router.route("/admin/product/:id").put(isAuthenticatdUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatdUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatdUser, createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatdUser, deleteReview);

module.exports = router;