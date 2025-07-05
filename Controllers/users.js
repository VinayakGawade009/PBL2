const User = require("../models/user.js");
const tags = require("../tags.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup");
};

module.exports.signup =  async (req, res) => {
    try {
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Codee!");
            res.redirect("/listings");
        });
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Codee!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl); // req.originalUrl
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    });
};

module.exports.renderVerifyForm = (req, res) => {
    res.render("users/verify.ejs", { tags });
};