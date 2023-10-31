import express from "express";
import { newsController } from "../app/controllers/NewsController.js";

const newsRouter = express.Router();

newsRouter.use("/", newsController.index);

export { newsRouter };
