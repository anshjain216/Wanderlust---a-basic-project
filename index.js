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
var session = require('express-session')
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");
app.use(session({
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
}));
const flash=require("connect-flash");
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.successmsg = req.flash("success");
     res.locals.errormsg = req.flash("error");
    next();
})

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const Users = require("./routes/User.js");
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
app.use("/", Users);
app.get("/", (req, res) => {
    res.send("hi i am root");
})
app.get("/demouser", async(req,res)=>{
    let fakeuser = new User({
        email:"student@gmail.com",
        username:"student12345"
    })
    let registerduser = await User.register(fakeuser,"helloworld");
    res.send(registerduser);
})
app.listen(8080, () => {
    console.log("server listning to port 8080");
})


app.use((err, req, res, next) => {
    let { status = 500, message = "something went wrong" } = err;
    res.status(status).render("listing/error.ejs", { message });
});