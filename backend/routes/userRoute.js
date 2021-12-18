const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthenticatdUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatdUser, getUserDetails);

router.route("/password/update").put(isAuthenticatdUser, updatePassword);

router.route("/me/update").put(isAuthenticatdUser, updateProfile);

router.route("/admin/users").get(isAuthenticatdUser, authorizeRoles("admin"), getAllUser);

router.route("/admin/user/:id").get(isAuthenticatdUser, authorizeRoles("admin"), getSingleUser)
.put(isAuthenticatdUser, authorizeRoles("admin"), updateUserRole)
.delete(isAuthenticatdUser, authorizeRoles("admin"), deleteUser);

module.exports = router;