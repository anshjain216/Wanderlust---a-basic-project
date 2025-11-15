require('dotenv').config();

const listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_KEY;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.allListing=async (req, res) => {
    let alllisting = await listing.find({});
    res.render("listing/index.ejs", { alllisting });
}

module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    let list = await listing.findById(id).populate({path:"reviews",populate:"author"}).populate("owner");
    if(!list){
        req.flash("error","Listing does not exist");
         return res.redirect("/listings");
    }
    res.render("listing/show.ejs", { list });
}

module.exports.newListing=(req, res) => {
    res.render("listing/new.ejs");
}

module.exports.addNewListing=async (req, res) => {
    // let {title,description,image,price,location,country}= req.body;
    let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send();
  


    let url = req.file.path;
    let filename=req.file.filename;
    let listing1 = req.body.listing;
    let newlisting = new listing(listing1);
    newlisting.image={url,filename};
    newlisting.owner= req.user._id;
    newlisting.geometry=response.body.features[0].geometry;
    await newlisting.save();
    req.flash("success","New listing added successfully");
    res.redirect("/listings");
}

module.exports.editListing=async (req, res) => {
    let { id } = req.params;
    let data = await listing.findById(id);
     if(!data){
        req.flash("error","Listing does not exist");
        return res.redirect("/listings");
    }
    let originalimg=data.image.url;
    originalimg= originalimg.replace("/upload","/upload/w_250");
    res.render("listing/edit.ejs", { data,originalimg });
}

module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    let list = await listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !=="undefined"){
    let url = req.file.path;
    let filename=req.file.filename;
    list.image={url,filename};
    await list.save();
    }

    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}/show`);
}

module.exports.deleteListing=async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
}