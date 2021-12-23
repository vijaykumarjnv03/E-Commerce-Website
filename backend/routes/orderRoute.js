const express = require("express");
const { newOrder, getSingleOrder, myOrders, updateOrder, deleteOrder, getAllOrders } = require("../controllers/orderController");
const router = express.Router();

const {isAuthenticatdUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatdUser , newOrder);

router.route("/order/:id").get(isAuthenticatdUser,  getSingleOrder);

router.route("/orders/me").get(isAuthenticatdUser, myOrders);

router.route("/admin/orders").get(isAuthenticatdUser, authorizeRoles("admin"), getAllOrders);

router.route("/admin/order/:id").put(isAuthenticatdUser, authorizeRoles("admin"), updateOrder)
.delete(isAuthenticatdUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;