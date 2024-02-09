import { NextFunction, Response, Request } from "express";
import { userInterface } from "../interfaces/user.interfaces";
import prisma from "../database/prismaClient";
import AppError from "../errors/app.Error";

export const ensureEmailIsUniqueForUpdate = async (req: Request, res: Response, next:NextFunction):Promise<void> => {

        const {email}: {email: string | null | undefined} = req.body
        
        if(email){
            const userWithEmail: userInterface | null = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })

            if(userWithEmail?.uuid !== res.locals.userUUID){
                throw new AppError("Email already exists", 409)
            }

            return next()

        }

        return next()
       
}