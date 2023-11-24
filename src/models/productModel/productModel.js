import mongoose, { SchemaType } from "mongoose";
import userModel from "../userModel/userModel.js";

const productSchema = new mongoose.Schema({
    codigo : Number,
    nombre: String,
    factura : String,
    fecha : String,
    cantidad : Number,
    descripcion : String,
    categoria : String,
    valor: Number,
    valortotal : Number,
    id_user : { type: mongoose.Schema.Types.ObjectId, ref: userModel }
})



export default mongoose.model('productModel', productSchema);