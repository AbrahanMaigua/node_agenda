const User = require("../models/shema/auth");

// Escuchar errores de conexión
// db.on("error", console.error.bind(console, "MongoDB connection error:"));


// Crear un nuevo usuario (ejemplo)
User.create({
    username: 'a',
    email: 'a@example.com',
    password: 'a'
}).then(user => {
    console.log('Usuario creado:', user);
}).catch(err => {
    console.error('Error al crear usuario:', err);
});


