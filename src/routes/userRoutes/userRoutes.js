import { Router } from "express";
import { createUser } from "../../controllers/userControllers/createUser.js";
import { authUser } from "../../controllers/userControllers/authUser.js";
import { profileUser } from "../../controllers/userControllers/ProfileUser.js";
import { validarToken } from "../../middlewares/validarToken.js";
import { logoutUser } from "../../controllers/userControllers/logoutUser.js";

export const user_routes = Router();

user_routes.post("/create", createUser);
user_routes.post("/login", authUser);
user_routes.post("/logout", logoutUser);
user_routes.get("/profile", validarToken , profileUser);
