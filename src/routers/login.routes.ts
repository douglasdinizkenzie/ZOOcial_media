import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.Middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginController } from "../controllers/login.controller";

export const loginRoute:Router = Router()


loginRoute.post("", 
    ensureDataIsValidMiddleware(loginSchema),
    loginController
    )