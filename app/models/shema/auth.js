// const mongoose = require("mongoose");

// const MongoDB_url = 'mongodb://admin:password@mongo:27017/my_database';

// // Conexión a MongoDB
// // 'mongodb://<usuario>:<contraseña>@<host>:<puerto>/<base_de_datos>';

// mongoose.connect(MongoDB_url, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// // Escuchar errores de conexión
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// // Definición del esquema de usuario
// const UserSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true, trim: true },
//     email: { type: String, required: true, unique: true, lowercase: true },
//     password: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// });

// // Modelo de usuario
// const User = mongoose.model('User', UserSchema);

// // Crear un nuevo usuario (ejemplo)
// User.create({
//     username: 'a',
//     email: 'a@example.com',
//     password: 'a'
// }).then(user => {
//     console.log('Usuario creado:', user);
// }).catch(err => {
//     console.error('Error al crear usuario:', err);
// });

// module.exports = User;
