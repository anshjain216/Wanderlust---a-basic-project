const User = require("../models/User.js");

module.exports.accessSignup=(req, res) => {
    res.render("User/signup.ejs");
}

module.exports.completeSignup=async (req, res,next) => {

    try {
        let { username, email, password } = req.body;
        const newUser = new User({
            email, username
        })
        const regUser = await User.register(newUser, password);
        req.login(regUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success", "New User Registered");
        res.redirect("/listings");
        })
        
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signUp");
    }

}

module.exports.accessLogin=(req, res) => {
    res.render("User/login.ejs");
}

module.exports.completeLogin=(req, res) => {
        req.flash("success","Welcome back to Wanderlust");
        let redirect= res.locals.redirectUrl || "/listings";
        res.redirect(redirect);
}

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged Out Successfully");
        res.redirect("/listings");
    })
}