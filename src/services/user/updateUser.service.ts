import prisma from "../../database/prismaClient";
import { userInterface, userRequestUpdate, userResponseInterface } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

export const updateUserService = async (data:userRequestUpdate, userUUID: string):Promise<userResponseInterface> => {

    const userUpdated: userInterface = await prisma.user.update({
        where: {
            uuid: userUUID
        },
        data: {
            ...data
        }
    })

    return userSchemaResponse.parse(userUpdated)
}