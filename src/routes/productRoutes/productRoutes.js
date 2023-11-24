import { Router } from "express";
import { createProduct } from "../../controllers/productControllers/userControllers/createProduct.js";
import { getProduct } from "../../controllers/productControllers/userControllers/getProduct.js";
import { validarToken } from "../../middlewares/validarToken.js";
export const product_routes = Router();


product_routes.post('/create', validarToken , createProduct)
product_routes.get('/get', validarToken , getProduct)
product_routes.get('/get/:id')
product_routes.patch('/update')
product_routes.delete('/delete')

