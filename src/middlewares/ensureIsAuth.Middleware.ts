import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import AppError from "../errors/app.Error";

export const ensureIsAuthMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const tokenHeaders: string | undefined = req.headers.authorization;
  
    if (!tokenHeaders) {
      throw new AppError("Missing Bearer Token", 401);
    }
  
    const token: string = tokenHeaders.split(" ")[1];
  
    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }
  
      
  
      res.locals.userUUID = decoded.sub;
  
      next();
    });
  };
  