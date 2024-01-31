import { z } from "zod";
import { userSchemaResponse } from "./user.schemas";
import { postSchema } from "./posts.schema";

export const commentSchema = z.object({
    uuid: z.string().uuid(),
    comment: z.string(),
    author: userSchemaResponse,
    author_uuid: z.string(),
    post: postSchema,
    post_uuid: z.string()
})


export const commentSchemaRequest = commentSchema.omit({
    uuid: true,
    author: true,
    author_uuid: true,
    post: true,
    post_uuid: true
})


export const commentSchemaResponseArray = commentSchema.array()