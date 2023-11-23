import productModel from "../../../models/productModel/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const Products = productModel.find();
    Products
    ? res.status(200).json({ message: Products })
    : res.status(400).json({ message: "¡Productos no encontrados.!" });
  } catch (error) {
    res
      .send(400)
      .json({ message: "¡Error de la consulta a la base de datos!" });
      console.log(error.message)
  }
};
