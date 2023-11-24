import productModel from "../../../models/productModel/productModel.js";

export const createProduct = async (req, res) => {
  const userID = req.user.id;
  
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
    const searchProduct = await productModel.findOne({ codigo });
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
      id_user: userID
      
    });
    const saveProduct = await newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {
    console.log(error);
  }
};
