import { Router } from "express";
import { ApiError, HttpCode } from "../errors/api.error";
import candidateRouter from "./candidates.router";

const apiRouter = Router();

apiRouter.use("/candidates", candidateRouter);

apiRouter.use((_, __, next) => {
  next(
    new ApiError({
      description: "Resource not found",
      httpCode: HttpCode.NOT_FOUND,
    })
  );
});

export default apiRouter;
