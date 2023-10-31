import {
  multipleMongooseToObject,
  mongooseToObject,
} from "../../util/mongoose.js";
import { course } from "../models/Course.model.js";
class SitesController {
  // GET HOME page
  async home(req, res, next) {
    course
      .find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }
  //GET SEARCH PAGE
  search(req, res, next) {
    res.render("search");
  }
}
var sitesController = new SitesController();

export { sitesController };
