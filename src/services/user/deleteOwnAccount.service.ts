import prisma from "../../database/prismaClient"

export const deleteOwnAccountService = async (userUUID: string) => {

    
    const following = await prisma.followers.findMany({
        where: {
            follower_uuid: userUUID
        }
    });

    
    for (const follow of following) {
        await prisma.user.update({
            where: {
                uuid: follow.followed_uuid
            },
            data: {
                followersQuantity: {
                    decrement: 1 
                }
            }
        });
    }

    
    await prisma.user.delete({
        where:{
            uuid: userUUID
        }
    });

    return;
}