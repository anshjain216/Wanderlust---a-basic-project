const mongoose = require("mongoose");
let listingSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1758654307553-f067f0367f13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>
            v===""?"https://images.unsplash.com/photo-1758654307553-f067f0367f13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v
        
    },
    price:Number,
    location: String,
    country: String
});
let listing = mongoose.model("listing",listingSchema);
module.exports= listing;