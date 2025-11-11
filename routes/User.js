const express = require("express");
const router = express.Router();
const asyncWrap = require("../utili/asyncWrap.js");
const passport = require("passport");
const { redirectUrl } = require("../middleware.js");
const userController = require("../controllers/User.js");

router.route("/signUp")
    .get(userController.accessSignup)
    .post(asyncWrap(userController.completeSignup))

router.route("/login")
    .get(userController.accessLogin)
    .post(redirectUrl, passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }), userController.completeLogin)

router.get("/logout", userController.logout);

module.exports = router;