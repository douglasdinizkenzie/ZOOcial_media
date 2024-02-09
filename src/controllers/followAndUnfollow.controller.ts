import { Request, Response } from "express"
import { followAndUnfollowService } from "../services/follow/followAndUnfollow.service"

export const followAndUnfollowController = async (req:Request, res:Response)=> {
    const userUUID: string = res.locals.userUUID
    const userToFollowOrUnfollow: string = req.params.uuid


    const followedOfUnfollowed = await followAndUnfollowService(userUUID, userToFollowOrUnfollow)

    if (!followedOfUnfollowed){
        return res.status(204).json()
    }else {
        return res.status(201).json(followedOfUnfollowed)
    }
}