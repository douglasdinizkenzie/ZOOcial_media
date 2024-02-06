import { z } from "zod";

export const userSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string().max(100),
    image: z.string().max(255).nullish(),
    email: z.string().max(255),
    password: z.string().max(255),
    createdAt: z.date().nullish(),
    updatedAt: z.date().nullish(),
    followersQuantity: z.number(),
    followingQuantity: z.number(),
    postsQuantity: z.number()
})


export const userSchemaRequest = userSchema.omit({
    uuid: true,
    createdAt: true,
    updatedAt: true,
    followersQuantity: true,
    postsQuantity: true,
    followingQuantity: true
})


export const userSchemaResponse = userSchema.omit({
    password: true,
})

export const userSchemaResponseArray = userSchemaResponse.array()