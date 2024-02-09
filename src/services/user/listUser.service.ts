import prisma from "../../database/prismaClient";
import { userInterface, userResponseInterface } from "../../interfaces/user.interfaces";
import { userSchemaResponse, userSchemaResponseArray } from "../../schemas/user.schemas";

export const listUserService = async (paramUUID: string):Promise<userResponseInterface> => {

    const user: userInterface | null = await prisma.user.findFirst({
        where:{ 
            uuid: paramUUID
        }
    })

    return userSchemaResponse.parse(user)
}