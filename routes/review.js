const express = require("express");
const router = express.Router({mergeParams:true});
const review = require("../models/review.js");
const { reviewSchema } = require("../schema.js");
const asyncWrap = require("../utili/asyncWrap.js");
const expressError = require("../utili/expressError.js");
const listing = require("../models/listing.js");
const { isLoggedIn,isAuthor } = require("../middleware.js");

let reviewsc = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(",");
        throw new expressError(404, errmsg);
    } else {
        next();
    }
}
router.post("/",isLoggedIn,reviewsc,asyncWrap( async(req,res)=>{
    let list =await listing.findById(req.params.id);
    let newreview = new review(req.body.review);
    newreview.author=req.user._id;
    list.reviews.push(newreview);
    await newreview.save();
    await list.save();
    req.flash("success","New review added successfully");
    res.redirect(`/listings/${list._id}/show`)
}));
router.delete("/:reviewid",isLoggedIn,isAuthor,asyncWrap(async (req,res)=>{
    let {id,reviewid} = req.params;
    await listing.findByIdAndUpdate(id,{$pull: {reviews:reviewid}});
    await review.findByIdAndDelete(reviewid);
    req.flash("success","Review deleted");
    res.redirect(`/listings/${id}/show`)
}))

module.exports=router;