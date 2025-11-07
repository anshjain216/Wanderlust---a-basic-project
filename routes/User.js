const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const asyncWrap = require("../utili/asyncWrap.js");
const passport= require("passport");

router.get("/signUp", (req, res) => {
    res.render("User/signup.ejs");
})

router.post("/signUp", asyncWrap(async (req, res) => {

    try {
        let { username, email, password } = req.body;
        const newUser = new User({
            email, username
        })
        const regUser = await User.register(newUser, password);
        req.flash("success", "New User Registered");
        res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signUp");
    }

}))

router.get("/login", (req, res) => {
    res.render("User/login.ejs");
})
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
}),
    (req, res) => {
        req.flash("success","Welcome back to Wanderlust");
        res.redirect("/listings");
    })

module.exports = router;