const Listing = require("../models/listing");
const tags = require("../tags.js");

// module.exports.index = async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings });
// };

module.exports.index = async (req, res) => {
    // console.log(req.query);  // Debugging: Check query parameters in console
    const { tag } = req.query; // Get the 'tag' from query parameters
    let filter = {};

    if (tag && tag !== "All") {
        filter.tags = tag; // Ensure 'tags' is being checked correctly
    }

    const allListings = await Listing.find(filter);
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs", { tags });
};

module.exports.searchResults = async (req, res) => {
    const { search } = req.query;
    // console.log(search);
    
    const foundListings = await Listing.find({
        $or: [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { tags: { $in: [new RegExp(search, "i")] } }
        ]
    });

    res.render("listings/searchResults.ejs", {foundListings});

};

module.exports.showListing = async (req, res) =>{
    // let {id} = req.params;
    // const listing = await Listing.findById(id).populate({path:  "reviews", populate: {path: "author"}}).populate("owner");
    // if(!listing) {
    //     req.flash("error", "Listing you requested for does not exist!");
    //     res.redirect("/listings");
    // }
    // console.log(listing);
    // res.render("listings/show.ejs", { listing });

    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:  "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let filter = {};
    if (listing.tags[0]) {
        filter.tags = listing.tags[0]; // Ensure 'tags' is being checked correctly
    }

    const allListings = await Listing.find(filter);

    // console.log(listing);
    res.render("listings/show.ejs", { listing , allListings });
    

    // res.render("listings/index.ejs", { allListings });
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, "..", filename);
    // extract all info
    const newlisting = new Listing(req.body.listing);
    // console.log(req.user);
    newlisting.owner = req.user._id;
    newlisting.image = { url, filename };
    await newlisting.save();
    req.flash("success", "New Listng Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    const prevValue = listing.tag;

    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250/e_blur:500");
    res.render("listings/edit.ejs", { listing, tags, prevValue, originalImageUrl });

};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(  typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!")
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};