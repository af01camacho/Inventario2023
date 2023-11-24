import { CreateAccessToken } from "../../libs/jwt.js";
import userModel from "../../models/userModel/userModel.js";
import bcypt from "bcrypt";

export const authUser = async (req, res) => {
  const { correo, clave } = req.body;
  try {
    const BuscarUsuario = await userModel.findOne({ correo });
    if (BuscarUsuario) {
      const CompararClave =  bcypt.compare(clave, BuscarUsuario.clave);
      if (CompararClave) {
        const token = await CreateAccessToken({
          id: BuscarUsuario._id,
          user: BuscarUsuario.usuario,
        });
        res.cookie( 'token', token )
        return res.status(200).json({ message: '¡Inicio de sesion correcto!' })
    }
    }
    res.status(400).json({ message: "¡Usuario o contraseña incorrectos!" });
  } catch (error) {
    console.log(error);
  }
};
