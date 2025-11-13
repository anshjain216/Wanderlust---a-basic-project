const listing = require("../models/listing.js");

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
    let url = req.file.path;
    let filename=req.file.filename;
    let listing1 = req.body.listing;
    let newlisting = new listing(listing1);
    newlisting.image={url,filename};
    newlisting.owner= req.user._id;
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
    res.render("listing/edit.ejs", { data });
}

module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}/show`);
}

module.exports.deleteListing=async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
}