import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

export type loginInterface = z.infer<typeof loginSchema>