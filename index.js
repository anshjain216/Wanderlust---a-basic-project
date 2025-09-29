const express= require("express");
const app = express();
const mongoose= require("mongoose");
const path = require("path");
const listing = require("./models/listing.js");
const ejsMate = require("ejs-mate");
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.engine('ejs', ejsMate);
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));
main().then(()=>{
    console.log("connection succesfull");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}
app.get("/",(req,res)=>{
    res.send("hi i am root");
})
app.listen(8080,()=>{
    console.log("server listning to port 8080");
})
app.get("/listings",async (req,res)=>{
   let alllisting= await listing.find({});
   res.render("listing/index.ejs",{alllisting});
})
app.get("/listings/:id/show",async (req,res)=>{
    let {id}= req.params;
    let list = await listing.findById(id);
    res.render("listing/show.ejs",{list});
})
app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs");
})
app.post("/listings",async(req,res)=>{
    // let {title,description,image,price,location,country}= req.body;
    let listing1 = req.body.listing;
    let newlisting = new listing(listing1);
    await newlisting.save();
    res.redirect("/listings");
})
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let data = await listing.findById(id);
    res.render("listing/edit.ejs",{data});
})
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}/show`);
})
app.delete("/listings/:id",async (req,res)=>{
    let {id}= req.params;
    await listing.findByIdAndDelete(id);
    res.redirect("/listings");
})