import { Request, Response } from "express"
import { loginInterface } from "../interfaces/login.interfaces"
import { loginService } from "../services/login/login.service"

export const loginController = async(req:Request, res:Response):Promise<Response> => {

    const data:loginInterface = req.body


    const  token: string = await loginService(data)

    return res.status(200).json({token: token})

}