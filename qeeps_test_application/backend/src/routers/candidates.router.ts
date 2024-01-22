import { Router } from "express";
import controllerWrapper from "../helpers/controller.wrapper";
import baseController from "../controllers/baseController";
import { Candidate } from "../models/index.models";

const candidateRouter = Router();

candidateRouter
  .route("/")
  .get(controllerWrapper(baseController.getAll(Candidate, ["guarantorIds"])));

// // Example routes for further backend development

// .post(controllerWrapper(baseController.create(model)))
// .patch(controllerWrapper(baseController.updateOne(model)))
// .delete(controllerWrapper(baseController.deleteOne(model)));

export default candidateRouter;
