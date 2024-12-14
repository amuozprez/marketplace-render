const jwt = require("jsonwebtoken");
const SECRET_KEY = "tu_llave_secreta"; // Asegúrate de que esta clave coincide en todos los archivos que usan JWT

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado: Token no proporcionado" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido o expirado" });
    }
    req.user = user; // Agrega los datos del usuario al request
    next();
  });
};

module.exports = { authenticateToken };