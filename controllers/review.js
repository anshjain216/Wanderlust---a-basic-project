const review = require("../models/review.js");
const listing = require("../models/listing.js");

module.exports.addReview= async(req,res)=>{
    let list =await listing.findById(req.params.id);
    let newreview = new review(req.body.review);
    newreview.author=req.user._id;
    list.reviews.push(newreview);
    await newreview.save();
    await list.save();
    req.flash("success","New review added successfully");
    res.redirect(`/listings/${list._id}/show`)
}

module.exports.deleteReview=async (req,res)=>{
    let {id,reviewid} = req.params;
    await listing.findByIdAndUpdate(id,{$pull: {reviews:reviewid}});
    await review.findByIdAndDelete(reviewid);
    req.flash("success","Review deleted");
    res.redirect(`/listings/${id}/show`)
}