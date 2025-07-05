const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "Teacher"  // This links to your Teacher model
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);