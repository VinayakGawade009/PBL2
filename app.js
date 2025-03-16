const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/codee');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Ani");
});

app.use("/listings", listings); // listing routes

app.use("/listings/:id/reviews", reviews); // review routes

// app.get("/test", async(req, res) => {
//     let sampleListing = new Listing ({
//         title: "Python Basics",
//         description: "Description of Python Basics Course.",
//         tag: "Python",
//         state: "recorded",
//         language: "english",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("sampleListing is saved");
// });

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let {statusCode="500", message="Someth/ing Went Wrong!"} = err;
    res.status(statusCode).render("error.ejs", { err });
    // res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});