import { Request, Response, NextFunction } from "express"
import { userInterface } from "../interfaces/user.interfaces"
import prisma from "../database/prismaClient"
import AppError from "../errors/app.Error"


export const ensureUserExistsMiddleware = async (req:Request, res:Response, next: NextFunction):Promise<void> => {
        const uuid: string = req.params.uuid

        const userFound:userInterface | null = await prisma.user.findFirst({
            where: {
                uuid: uuid
            }
        })

        if(!userFound) {
            throw new AppError("User not found", 404)
        }

        return next()
}