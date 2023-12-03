import mongoose from "mongoose";
import { Sequelize } from "sequelize";

export const ConexionMySQL = async () => {
  const sequelize = new Sequelize("inventariomedico", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Conexion con MySQL");
  } catch (error) {
    console.error("Error de base de datos MySQL", error);
  }
};

export const ConexionMongo = async () => {
  const DB = mongoose.connect(process.env.DB);
  (await DB)
    ? console.log("*** CONEXION EXITOSA MONGO ***")
    : console.log("***ERROR DE LA BASE DE DATOS MONGO");
};
