import { z } from "zod";
import { postSchema } from "./posts.schema";
import { userSchemaResponse } from "./user.schemas";

export const likesSchema = z.object({
    uuid: z.string().uuid(),
    author: userSchemaResponse,
    author_uuid: z.string(),
    post: postSchema,
    post_uuid: z.string()
})