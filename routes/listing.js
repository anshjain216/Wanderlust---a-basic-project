const express = require("express");
const router = express.Router();
const asyncWrap = require("../utili/asyncWrap.js");
const {isLoggedIn,isOwner,validatesc} = require("../middleware.js");
const listingController = require("../controllers/listing.js")
if(process.env.NODE_ENV!="production"){
    require('dotenv').config()
}
const {storage}=require("../cloudConfig.js");
const multer  = require('multer')
const upload = multer({ storage})




router.route("/")
.get( asyncWrap(listingController.allListing))
.post( isLoggedIn,validatesc,upload.single('listing[image]'),asyncWrap(listingController.addNewListing) );

router.get("/new",isLoggedIn, listingController.newListing);

router.get("/category",asyncWrap(listingController.categoryListing));

router.route("/:id")
.put(isLoggedIn,isOwner,upload.single('listing[image]'), validatesc, asyncWrap(listingController.updateListing))
.delete(isLoggedIn,isOwner, asyncWrap(listingController.deleteListing));

router.get("/:id/show", asyncWrap(listingController.showListing));

router.get("/:id/edit",isLoggedIn,isOwner, asyncWrap(listingController.editListing));



module.exports=router;