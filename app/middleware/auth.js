const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const authMiddleware = (req, res, next) => {
  const authHeader = req.cookies.token || req.headers.authorization;
  console.log("Auth Header:", authHeader);
  // Verifica si el token fue enviado
  if (!authHeader) {
    console.log("Token no proporcionado.");
    return res.redirect("/user/login");
  }

  const token = authHeader.split(" ")[1] || authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.user = decoded; // Puedes acceder al usuario decodificado en las rutas protegidas
    next(); // Continúa a la siguiente función
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado." });
  }
};

module.exports = authMiddleware;
