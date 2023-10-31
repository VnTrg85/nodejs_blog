import express from "express";
import { coursesController } from "../app/controllers/CoursesController.js";

const coursesRouter = express.Router();

coursesRouter.get("/create", coursesController.create);
coursesRouter.post("/store", coursesController.store);
coursesRouter.get("/:slug", coursesController.show);

export { coursesRouter };
