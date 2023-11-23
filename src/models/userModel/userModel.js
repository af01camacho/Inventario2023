import mongoose, { SchemaType } from "mongoose";

const userSchema = new mongoose.Schema({
   usuario: String,
   nombre: String,
   apellido: String,
   correo: String,
   telefono: Number,
   clave: String,
   rol: {type: String, enum: ['user', 'admin'], default: 'user'}
})



export default mongoose.model('userModel', userSchema);