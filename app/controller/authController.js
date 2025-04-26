
// Para: Registro, login, logout, validación de tokens.
// Funciones típicas:

// registerUser(req, res)
// loginUser(req, res)
// logoutUser(req, res)
// refreshToken(req, res)
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/shema/auth");
const cookieParser = require("cookie-parser");
// Clave secreta para JWT (deberías usar .env en producción)
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
console.log("JWT_SECRET:", JWT_SECRET);
// Registro de usuario
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ msg: "username, email y password son obligatorios" });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ msg: "El username o email ya existen" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ msg: "Usuario creado con éxito" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error del servidor" });
    }
};

// Login
const loginUser = async (req, res) => {
    if (req.cookies.token) {
        return res.status(400).json({ msg: "Ya estás logueado" });
    }
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "email y password son obligatorios" });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ msg: "Contraseña incorrecta" });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        // res.cookie("token", token).send('Cookie-parser');
        res
        .status(200)
        .cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000
        })
        .json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error en login" });
    }
};

// Logout (opcional para JWT, depende de frontend)
const logoutUser = (req, res) => {
    // En JWT no hay "logout" en backend, es tarea del frontend eliminar el token
    if (!req.cookies.token) {
        return res.status(400).json({ msg: "No estás logueado" });
    }
    res.clearCookie("token"); // Borra la cookie del token
    res.json({ msg: "Logout exitoso (el frontend debe borrar el token)" });
};

// Refresh token 
const refreshToken = (req, res) => {
    const oldToken = req.cookies.token;
    if (!oldToken) {
        return res.status(401).json({ msg: "Token requerido" });
    }
    

    try {
        const decoded = jwt.verify(oldToken, JWT_SECRET);
        const newToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: "1h" });
        res
        .cookie("token", newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000
        })
        .json({ token: newToken });
    } catch (error) {
        res.status(401).json({ msg: "Token inválido o expirado" });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    refreshToken,
};
