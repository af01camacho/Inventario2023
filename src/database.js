import mongoose from "mongoose";

export const ConexionDB = async () => {
        const DB = mongoose.connect(process.env.DB)
        await DB ? console.log('*** CONEXION EXITOSA ***') : console.log('***ERROR DE LA BASE DE DATOS')
}
