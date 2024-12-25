const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: [String],
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Article", articleSchema);
