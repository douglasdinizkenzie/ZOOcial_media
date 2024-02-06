import { z } from "zod";
import {  userSchemaResponse } from "./user.schemas";

export const followersSchema = z.object({
   
        uuid: z.string(),
        follower_uuid: z.string(),
        followed_uuid: z.string(),
        followed: userSchemaResponse,
        follower: userSchemaResponse,
  
      
})