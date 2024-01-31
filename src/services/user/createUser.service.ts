import { hashSync } from "bcryptjs";
import prisma from "../../database/prismaClient";
import { userInterface, userRequestInterface, userResponseInterface } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

export const createUserService = async (data: userRequestInterface): Promise<userResponseInterface> => {

    const { password, ...rest } = data;
    const encryptedPassword = hashSync(password, 10);

    
    const createdUser: userInterface = await prisma.user.create({
        data: {
            ...rest, password: encryptedPassword
        }
    })

    const newUser: userResponseInterface = userSchemaResponse.parse(createdUser)

    return newUser
}