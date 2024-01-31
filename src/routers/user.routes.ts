import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.Middleware";
import { userSchemaRequest } from "../schemas/user.schemas";
import { createUserController } from "../controllers/user.controller";
import { ensureEmailIsUniqueMiddleware } from "../middlewares/ensureEmailIsUnique.Middleware";

export const userRoutes:Router = Router();


userRoutes.post(
    "", 
    ensureDataIsValidMiddleware(userSchemaRequest),
    ensureEmailIsUniqueMiddleware,
    createUserController
)