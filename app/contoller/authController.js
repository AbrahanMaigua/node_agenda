
// Para: Registro, login, logout, validación de tokens.
// Funciones típicas:

// registerUser(req, res)
// loginUser(req, res)
// logoutUser(req, res)
// refreshToken(req, res)
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/shema/auth");

const registerUser(req, res) => {
    try {
        const { username, email, pasword } = req.body;
        // validation basic
        if ( !username || !email || !pasword) {
            return res.status(400).json({
                mesg:"username, email e pasword son obligatorios"
            })
        }
        // email and username unique
        const existingUser = await User.findOne(
            ( {$or: [{email},{username}]})
        )
        if (existingUser) {
            return req.(400).json(
                {
                    mesg:'username or email exiten'
                })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pasword, salt)
    } catch (error) {
        
    }
};


// loginUser(req, res)
// logoutUser(req, res)
// refreshToken(req, res)