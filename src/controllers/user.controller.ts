import { userRequestInterface, userResponseInterface } from "../interfaces/user.interfaces"
import { Request, Response } from "express"
import { createUserService } from "../services/user/createUser.service"

export const createUserController = async (req:Request, res:Response):Promise<Response> => {
        const data: userRequestInterface = req.body

        const newUser: userResponseInterface = await createUserService(data) 

        return res.status(201).json(newUser)
}