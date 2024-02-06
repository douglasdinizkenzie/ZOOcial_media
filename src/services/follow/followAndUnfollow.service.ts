import prisma from "../../database/prismaClient"
import { followersSchema } from "../../schemas/followers.schema"

export const followAndUnfollowService = async (userUUUID: string, userToFollow: string) => {
    
   try {

    const alreadyFollow = await prisma.followers.findFirst({
        where: {
            follower_uuid: userUUUID,
            followed_uuid: userToFollow
        }
    })

    if(!alreadyFollow){
         await prisma.followers.create({
            data: {
                follower_uuid: userUUUID,
                followed_uuid: userToFollow
            },
            include:{
                followed: true,
                follower: true 
            }
        })

        await prisma.user.update({
            where: {
                uuid: userUUUID
            },
            data: {
                followingQuantity: {
                    increment: 1
                }
            }
        })

        await prisma.user.update({
            where: {
                uuid: userToFollow
            },
            data: {
                followersQuantity: {
                    increment: 1
                }
            }
        })

        const updatedFollowed = await prisma.followers.findFirst({
            where: {
                follower_uuid: userUUUID,
                followed_uuid: userToFollow
            },
            include: {
                followed: true,
                follower: true
            }
        });

        return followersSchema.parse(updatedFollowed)
    }

    await prisma.followers.delete({
        where: {
            uuid: alreadyFollow.uuid
        }
    })

    await prisma.user.update({
        where: {
            uuid: userUUUID
        },
        data: {
            followingQuantity: {
                decrement: 1
            }
        }
    })

    await prisma.user.update({
        where: {
            uuid: userToFollow
        },
        data: {
            followersQuantity: {
                decrement: 1
            }
        }
    })

    return
    
   } catch (error) {
        console.log(error)
   }
}