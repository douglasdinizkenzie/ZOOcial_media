import prisma from "../../database/prismaClient"
import { userInterface, userResponseArrayInterface } from "../../interfaces/user.interfaces"
import { userSchemaResponseArray } from "../../schemas/user.schemas"

export const listAllUsersService = async ():Promise<userResponseArrayInterface> => {
     const users: userInterface[] = await prisma.user.findMany()

     return userSchemaResponseArray.parse(users)
}