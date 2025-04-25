const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica si el token fue enviado
  if (!authHeader) {
    return res.status(401).json({ message: "Token no proporcionado." });
  }

  // El token suele venir como "Bearer <token>", por eso se divide
  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.user = decoded; // Puedes acceder al usuario decodificado en las rutas protegidas
    next(); // Continúa a la siguiente función
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado." });
  }
};

module.exports = authMiddleware;
