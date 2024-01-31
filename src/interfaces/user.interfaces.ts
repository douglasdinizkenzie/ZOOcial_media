import { z } from "zod";
import { userSchema, userSchemaRequest, userSchemaResponse, userSchemaResponseArray } from "../schemas/user.schemas";

export type userInterface = z.infer<typeof userSchema>
export type userRequestInterface = z.infer<typeof userSchemaRequest> 
export type userResponseInterface = z.infer<typeof userSchemaResponse> 
export type userResponseArrayInterface = z.infer<typeof userSchemaResponseArray> 