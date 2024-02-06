import { Router } from "express";
import { ensureIsAuthMiddleware } from "../middlewares/ensureIsAuth.Middleware";
import { followAndUnfollowController } from "../controllers/followAndUnfollow.controller";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.Middleware";

export const followRoutes:Router = Router()



followRoutes.use(ensureIsAuthMiddleware)

followRoutes.patch("/:uuid",
    ensureUserExistsMiddleware,
    followAndUnfollowController)