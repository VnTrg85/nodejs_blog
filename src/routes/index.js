import { newsRouter } from "./news.routes.js";
import { sitesRouter } from "./sites.routes.js";
import { coursesRouter } from "./courses.routes.js";

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", sitesRouter);
}

export { route };
