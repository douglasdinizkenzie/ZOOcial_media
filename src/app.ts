import cors from "cors";
import "express-async-errors"
import express, { Application } from "express";
import { handlerError } from "./middlewares/handleError.Middleware";
import { userRoutes } from "./routers/user.routes";

const app: Application = express()
app.use(cors())
app.use(express.json())


app.use("/user", userRoutes)


app.use(handlerError)


export default app