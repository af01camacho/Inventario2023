import bcrypt from "bcrypt";
import userModel from "../../models/userModel/userModel.js";
import { CreateAccessToken } from "../../libs/jwt.js";

export const createUser = async (req, res) => {
  const { usuario, nombre, apellido, correo, telefono, clave } = req.body;
  if (!usuario || !nombre || !apellido || !correo || !telefono || !clave) {
    return res.status(400).json({ message: "¡Porfavor completa los campos.!" });
  }
  try {
    const searchUser = await userModel.findOne({ correo });
    if (searchUser) {
      return res
        .status(400)
        .json({ message: "¡Email duplicado, prueba otro.!" });
    }
    const hashpass = await bcrypt.hash(clave, 10);
    const newUser = await userModel({
      usuario,
      nombre,
      apellido,
      correo,
      telefono,
      clave: hashpass,
    });
    const saveUser = newUser.save();
    const token = await CreateAccessToken({
      tokenID: saveUser.id,
      tokenUser: saveUser.usuario,
      tokenEmail: saveUser.correo,
    });
    if(!token){
      res.send(400).json({ message: '¡Error no podemos crear un acceso a la app!' })
    }
    res.cookie( 'token', token )
    res.status(200).json({ message: '¡Usuario creado exitosamente!'});
  } catch (error) {
    console.log(error.messsage);
  }
};
