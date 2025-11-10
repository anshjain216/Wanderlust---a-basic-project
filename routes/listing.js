const express = require("express");
const router = express.Router();
const listing = require("../models/listing.js");
const { listingSchema} = require("../schema.js");
const asyncWrap = require("../utili/asyncWrap.js");
const expressError = require("../utili/expressError.js");
const {isLoggedIn,isOwner} = require("../middleware.js");

let validatesc = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(",");
        throw new expressError(404, errmsg);
    } else {
        next();
    }
}

router.get("/", asyncWrap(async (req, res) => {
    let alllisting = await listing.find({});
    res.render("listing/index.ejs", { alllisting });
}));
router.get("/:id/show", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let list = await listing.findById(id).populate({path:"reviews",populate:"author"}).populate("owner");
    if(!list){
        req.flash("error","Listing does not exist");
         return res.redirect("/listings");
    }
    res.render("listing/show.ejs", { list });
}));
router.get("/new",isLoggedIn, (req, res) => {
    res.render("listing/new.ejs");
})
router.post("/", validatesc, asyncWrap(async (req, res) => {
    // let {title,description,image,price,location,country}= req.body;
    let result = listingSchema.validate(req.body);
    if (result.error) {
        throw new expressError(404, result.error);
    }
    let listing1 = req.body.listing;
    let newlisting = new listing(listing1);
    newlisting.owner= req.user._id;
    await newlisting.save();
    req.flash("success","New listing added successfully");
    res.redirect("/listings");
}));

router.get("/:id/edit",isLoggedIn,isOwner, asyncWrap(async (req, res) => {
    let { id } = req.params;
    let data = await listing.findById(id);
     if(!data){
        req.flash("error","Listing does not exist");
        return res.redirect("/listings");
    }
    res.render("listing/edit.ejs", { data });
}));
router.put("/:id",isLoggedIn,isOwner, validatesc, asyncWrap(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}/show`);
}));
router.delete("/:id",isLoggedIn,isOwner, asyncWrap(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
}));

module.exports=router;