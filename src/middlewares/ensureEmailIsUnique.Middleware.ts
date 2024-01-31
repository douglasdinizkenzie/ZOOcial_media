import { NextFunction, Response, Request } from "express";
import { userInterface } from "../interfaces/user.interfaces";
import prisma from "../database/prismaClient";
import AppError from "../errors/app.Error";

export const ensureEmailIsUniqueMiddleware = async (req: Request, res: Response, next:NextFunction):Promise<void> => {

        const {email}: {email: string} = req.body
        
        const emailFound: userInterface | null = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(emailFound){
            throw new AppError("This email already exists", 409)
        }

        return next()
}