import {  userRequestInterface, userResponseArrayInterface, userResponseInterface } from "../interfaces/user.interfaces"
import { Request, Response } from "express"
import { createUserService } from "../services/user/createUser.service"
import { listAllUsersService } from "../services/user/listAllUsers.service"
import { listUserService } from "../services/user/listUser.service"
import { deleteOwnAccountService } from "../services/user/deleteOwnAccount.service"

export const createUserController = async (req:Request, res:Response):Promise<Response> => {
        const data: userRequestInterface = req.body

        const newUser: userResponseInterface = await createUserService(data) 

        return res.status(201).json(newUser)
}



export const listAllUsersController = async (req:Request, res:Response):Promise<Response> => {
        
        const users: userResponseArrayInterface = await listAllUsersService()

        return res.status(200).json(users)
}


export const listUserController = async (req:Request, res:Response):Promise<Response> => {
        const paramUUID = req.params.uuid

        const user: userResponseInterface = await listUserService(paramUUID)

        return res.status(200).json(user)
}


export const deleteOwnAccount = async (req:Request, res:Response):Promise<Response> => {
        const userUUID = res.locals.userUUID

        await deleteOwnAccountService(userUUID)


        return res.status(204).json()
}