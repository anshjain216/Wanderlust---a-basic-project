const express = require("express");
const router = express.Router();
const asyncWrap = require("../utili/asyncWrap.js");
const {isLoggedIn,isOwner,validatesc} = require("../middleware.js");
const listingController = require("../controllers/listing.js")

router.route("/")
.get( asyncWrap(listingController.allListing))
.post( validatesc, asyncWrap(listingController.addNewListing));

router.get("/new",isLoggedIn, listingController.newListing);

router.route("/:id")
.put(isLoggedIn,isOwner, validatesc, asyncWrap(listingController.updateListing))
.delete(isLoggedIn,isOwner, asyncWrap(listingController.deleteListing));

router.get("/:id/show", asyncWrap(listingController.showListing));

router.get("/:id/edit",isLoggedIn,isOwner, asyncWrap(listingController.editListing));

module.exports=router;