import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan';
import cors from 'cors'
import { product_routes } from './routes/productRoutes/productRoutes.js';
import { user_routes } from './routes/userRoutes/userRoutes.js';
const server = express();
const port = process.env.PORT || 3000;
const domainwhite = process.env.whitelist
import { ConexionDB } from './database.js';
ConexionDB();

/* Middlewares */
server.use(morgan('dev'))
server.use(express.json())
server.use(cors(domainwhite))

/* Routes */

server.use('/api/products', product_routes)
server.use('/api/users', user_routes)

/* Configuraciones */

server.listen(port, () => console.log(`***Servidor corriendo***\n ***en el puerto: ${port}***`))