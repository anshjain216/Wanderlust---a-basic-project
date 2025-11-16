if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const mongoose= require("mongoose");
const initdata = require("./data.js");
const listing= require("../models/listing.js");
main().then(()=>{
    console.log("connection succesfull");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(process.env.ATLASDB_KEY);
}
const initdb= async ()=>{
    await listing.deleteMany({});
    await listing.insertMany(initdata.data);
    console.log("data initialized successfully");
}
initdb();