import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.Middleware";
import { userSchemaRequest, userSchemaRequestUpdate } from "../schemas/user.schemas";
import { createUserController, deleteOwnAccount, listAllUsersController, listUserController, updateUserController } from "../controllers/user.controller";
import { ensureEmailIsUniqueMiddleware } from "../middlewares/ensureEmailIsUnique.Middleware";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.Middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.Middleware";
import { ensureEmailIsUniqueForUpdate } from "../middlewares/ensureEmailIsUniqueForUpdate.middleware";

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


userRoutes.patch("",
    ensureIsAuthMiddleware,
    ensureDataIsValidMiddleware(userSchemaRequestUpdate),
    ensureEmailIsUniqueForUpdate,
    updateUserController
    )