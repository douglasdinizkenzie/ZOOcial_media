import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.Middleware";
import { userSchemaRequest } from "../schemas/user.schemas";
import { createUserController, deleteOwnAccount, listAllUsersController, listUserController } from "../controllers/user.controller";
import { ensureEmailIsUniqueMiddleware } from "../middlewares/ensureEmailIsUnique.Middleware";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.Middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.Middleware";

export const userRoutes:Router = Router();


userRoutes.post(
    "", 
    ensureDataIsValidMiddleware(userSchemaRequest),
    ensureEmailIsUniqueMiddleware,
    createUserController
)


userRoutes.get("", 
    ensureIsAuthMiddleware,
    listAllUsersController)


userRoutes.get("/:uuid", 
    ensureIsAuthMiddleware,
    ensureUserExistsMiddleware,
    listUserController)


userRoutes.delete("", 
    ensureIsAuthMiddleware,
    deleteOwnAccount)