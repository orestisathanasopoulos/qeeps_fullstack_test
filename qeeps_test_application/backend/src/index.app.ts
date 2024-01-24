import express from "express";
import router from "./routers/index.router";
import errorHandler from "./helpers/error.handler";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

export default app;
