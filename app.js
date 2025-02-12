const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const tags = require("./tags.js");
const methodOverride = require("method-override");

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

app.get("/", (req, res) => {
    res.send("Ani");
});

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs", { tags });
});

// Shouw Route
app.get("/listings/:id", async (req, res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

// Create Route
app.post("/listings", async (req, res) => {
    // extract all info
    let newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    const prevValue = listing.tag;
    res.render("listings/edit.ejs", { listing, tags, prevValue });

});

// Update Route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

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

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});