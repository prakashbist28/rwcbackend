const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    email: { type: String },
    password: { type: String, required: true },
    phone: { type: Number },
    username: { type: String } 
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);
