const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejsMate);
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
main().then(() => {
    console.log("connection succesfull");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}



app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);
app.get("/", (req, res) => {
    res.send("hi i am root");
})
app.listen(8080, () => {
    console.log("server listning to port 8080");
})


app.use((err, req, res, next) => {
    let { status = 500, message = "something went wrong" } = err;
    res.status(status).render("listing/error.ejs", { message });
});