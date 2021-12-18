const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const { isAuthenticatdUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(isAuthenticatdUser, authorizeRoles("admin"), createProduct);

router.route("/product/:id").put(isAuthenticatdUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatdUser, authorizeRoles("admin"), deleteProduct).get(getProductDetails);



module.exports = router;