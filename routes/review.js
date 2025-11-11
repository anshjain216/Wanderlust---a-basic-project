const express = require("express");
const router = express.Router({mergeParams:true});
const asyncWrap = require("../utili/asyncWrap.js");
const { isLoggedIn,isAuthor,reviewsc } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

router.post("/",isLoggedIn,reviewsc,asyncWrap(reviewController.addReview));

router.delete("/:reviewid",isLoggedIn,isAuthor,asyncWrap(reviewController.deleteReview));

module.exports=router;