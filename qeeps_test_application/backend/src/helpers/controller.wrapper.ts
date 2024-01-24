import { ApiError, HttpCode } from "../errors/api.error";
import { Request, Response, NextFunction } from "express";

export type Controller = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export default (controller: Controller) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      controller(req, res, next);
    } catch (err: unknown | Error | ApiError) {
      if (err instanceof Error || err instanceof ApiError) {
        next(
          new ApiError({
            description: err.message,
            httpCode: HttpCode.INTERNAL_SERVER_ERROR,
          })
        );
      } else
        next(
          new ApiError({
            description: "Something went wrong",
            httpCode: HttpCode.INTERNAL_SERVER_ERROR,
          })
        );
    }
  };
