import { Router } from "express";
import { createProduct } from "../../controllers/productControllers/userControllers/createProduct.js";
import { getProduct } from "../../controllers/productControllers/userControllers/getProduct.js";
export const product_routes = Router();


product_routes.post('/create', createProduct)
product_routes.get('/get', getProduct)
product_routes.get('/get/:id')
product_routes.patch('/update')
product_routes.delete('/delete')

