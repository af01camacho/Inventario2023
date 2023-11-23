import productModel from "../../../models/productModel/productModel";

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const ProductID = productModel.findById(id);
    ProductID
      ? res.status(200).json({ message: ProductID })
      : res.status(400).json({ message: "¡Producto no encontrado.!" });
  } catch (error) {
    res
      .send(400)
      .json({ message: "¡Error de la consulta a la base de datos!" });
      console.log(error.message)
  }
};
