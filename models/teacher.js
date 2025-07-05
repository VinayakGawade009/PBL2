const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true 
    },
    bio: {
        type: String,
        required: true
    },
    expertise: [String], // Array of tags (can be topics like "React", "AI", etc.)
    experience: {
        type: Number,
        min: 0
    },
    portfolio: {
        type: String // URL
    },
    resume: {
        type: String // Filename or file path if you store uploaded resume
    },
    isVerified: {
        type: Boolean,
        default: false // You can update this once admin approves
    }
}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);
