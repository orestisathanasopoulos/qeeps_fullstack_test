import { NextFunction, Request, Response } from "express";
import mongoose, { Document, Model } from "mongoose";

const create =
  (model: Model<any>) => (req: Request, res: Response, next: NextFunction) => {
    console.log(`New ${model.modelName}`);

    const doc = new model({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });

    return doc.save().then((result: any) => res.status(201).json({ result }));
  };

const getAll =
  (model: Model<any>, populate?: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(`Getting all documents from ${model.modelName}`);

    const results = await model.find<Document>().populate(populate || []);
    // const results = await model.find<Document>();

    console.log(results);
    return res.status(200).json({ results });
  };

const getById =
  (model: Model<any>, populate?: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`Getting document from ${model.modelName} by ID`);

    const id = req.params.id;

    model
      .findOne<Document>({ _id: id })
      .populate(populate || [])
      .then((results) => {
        if (!results) {
          return next();
        }
        console.log(results);
        return res.status(200).json({ results });
      });
  };

const updateOne =
  (model: Model<any>, populate?: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`Updating document from ${model.modelName} by ID`);

    const id = req.params.id;

    model
      .findOne<Document>({ _id: id })
      .populate(populate || [])
      .then((results) => {
        if (!results) {
          return next();
        }
        results.set(req.body);
        return results.save().then((results) => {
          res.status(200).json({ results });
        });
      });
  };

const deleteOne =
  (model: Model<any>, populate?: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(`Updating document from ${model.modelName} by ID`);

    const id = req.params.id;

    model
      .findByIdAndDelete(id)
      .then((result) =>
        result ? res.status(201).json({ result, message: "Deleted" }) : next()
      );
  };

export default { create, getAll, getById, updateOne, deleteOne };
