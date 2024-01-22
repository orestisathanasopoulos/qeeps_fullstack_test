import { ApiError } from "../errors/api.error";
import { NextFunction, Request, Response } from "express";

export default (
  err: unknown | Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const thisError = err as ApiError;

  const status = thisError.httpCode || 500;
  return res.status(status).json({ error: thisError.message });
};
