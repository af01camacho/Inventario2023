import bcrypt from "bcrypt";
import userModel from "../../models/userModel/userModel.js";

export const createUser = async (req, res) => {
  const { usuario, nombre, apellido, correo, telefono, clave } = req.body;
  if (
    !usuario ||
    !nombre ||
    !apellido ||
    !correo ||
    !telefono ||
    !clave
  ) {
    return res
    .status(400)
    .json({ message: "¡Porfavor completa los campos.!" });
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
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error.messsage);
  }
};
