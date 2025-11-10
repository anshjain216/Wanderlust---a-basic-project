const listing = require("./models/listing.js");
const review = require("./models/review.js");

module.exports.isLoggedIn= (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl= req.originalUrl;
        req.flash("error","Please login first");
        return res.redirect("/login");
    }
    next();
}

module.exports.redirectUrl= (req,res,next)=>{
    res.locals.redirectUrl=req.session.redirectUrl;
    next()
}

module.exports.isOwner=async (req,res,next)=>{
    let { id } = req.params;
    let listing1 = await listing.findById(id);
    if(!listing1.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of the listing");
        return res.redirect(`/listings/${id}/show`);
    }
    next();
}

module.exports.isAuthor=async (req,res,next)=>{
    let {id,reviewid} = req.params;
    let review1 = await review.findById(reviewid);
    if(!review1.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}/show`);
    }
    next();
}