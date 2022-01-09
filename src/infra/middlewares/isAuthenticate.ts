import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../../config/default";

const isAuthenticate = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const authorization = request.headers.authorization?.split(" ")[1];

    if (!authorization) {
      throw new Error("Token not found");
    }

    const decoded = verify(authorization, JWT_SECRET);

    request.user = decoded;

    next();
  } catch (error) {
    return response.status(400).json(error);
  }
};

export { isAuthenticate };
