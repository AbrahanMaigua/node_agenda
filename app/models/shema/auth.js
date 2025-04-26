const connet
 = require("../../controller/db")
const mongoose = require('mongoose');

// Definición del esquema de usuario
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Modelo de usuario
const User = mongoose.model('User', UserSchema);


module.exports = User;
