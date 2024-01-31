import { z } from "zod";
import { userSchemaResponse } from "./user.schemas";

export const postSchema = z.object({
    uuid: z.string().uuid(),
    post: z.string(),
    image: z.string().max(255),
    author: userSchemaResponse,
    author_uuid: z.string(),
    comments: z.object({
        uuid: z.string().uuid(),
        comment: z.string(),
        author: userSchemaResponse,
        author_uuid: z.string(),
    }),
    commentsQuantity: z.number(),
    likesQuantity: z.number(),
    likes: z.object({
        uuid: z.string().uuid(),
        author: userSchemaResponse,
        author_uuid: z.string(),
    })

})


export const postSchemaRequest = postSchema.omit({
    uuid: true,
    author: true,
    author_uuid: true,
    comments: true,
    commentsQuantity: true,
    likes: true,
    likesQuantity: true
})