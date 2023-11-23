import { Router } from "express";
import { createUser } from "../../controllers/userControllers/createUser.js";

export const user_routes = Router();


user_routes.post('/create', createUser)