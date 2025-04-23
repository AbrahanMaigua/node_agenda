
const mongoose = require('mongoose');

// URL de conexión (ajustá usuario, contraseña, host y nombre de base)
const MongoDB_url = 'mongodb://admin:password@mongo:27017/my_database';

mongoose.connect(MongoDB_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Conectado a MongoDB");
})
.catch((error) => {
  console.error("❌ Error al conectar a MongoDB:", error);
});

module.exports = mongoose;
