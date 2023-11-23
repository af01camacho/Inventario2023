import productModel from "../../../models/productModel/productModel.js";

export const createProduct = async (req, res) => {
  const {
    codigo,
    nombre,
    fechavencimiento,
    fechaexpedicion,
    cantidad,
    descripcion,
    categoria,
    valor,
    valortotal,
  } = req.body;
  if (
    !codigo ||
    !nombre ||
    !fechavencimiento ||
    !fechaexpedicion ||
    !cantidad ||
    !descripcion ||
    !categoria ||
    !valor ||
    !valortotal
  ) {
    return res.status(400).json({ message: "¡Porfavor completa los campos.!" });
  }
  try {
    const searchProduct = await userModel.findOne({ codigo });
    if (searchProduct) {
      return res
        .status(400)
        .json({ message: "¡COdigo duplicado, prueba otro.!" });
    }
    const newProduct = await productModel({
      codigo,
      nombre,
      fechavencimiento,
      fechaexpedicion,
      cantidad,
      descripcion,
      categoria,
      valor,
      valortotal,
    });
    const saveProduct = await newProduct.save();
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error.messsage);
  }
};
