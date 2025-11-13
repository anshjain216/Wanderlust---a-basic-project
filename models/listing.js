const mongoose = require("mongoose");
const Review = require("./review");
const { Schema } = mongoose;
let listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
       url:String,
       filename:String
    },
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
            ref:"User"
    }
});
listingSchema.post("findOneAndDelete",async (list)=>{
 if(list){
    await Review.deleteMany({_id:{$in: list.reviews}})
 }
})
let listing = mongoose.model("listing", listingSchema);
module.exports = listing;