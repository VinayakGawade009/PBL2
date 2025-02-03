const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/codee');
}

app.get("/", (req, res) => {
    res.send("Ani");
});

app.get("/listings", (req, res) => {
    Listing.find({}).then(res => {
        console.log(res);
    });
})

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