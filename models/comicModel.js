const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
    comicdoc: { type: String, required: true, unique: true },
    author: { type: String, required: true, unique: true },
    views: { type: Number },
    comic_title: { type: String },
    chapter_count: { type: Number },
    cover_img: { type: String },
    rating: { type: Number }
}, { versionKey: false });

module.exports = mongoose.model('Comic', comicSchema);