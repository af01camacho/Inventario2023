import jwt from "jsonwebtoken";

export const validarToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send("No estás logueado. Por favor, inicia sesión.");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRETKEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    res
      .status(401)
      .send("Error al verificar el token. Inicia sesión nuevamente.");
  }
};
