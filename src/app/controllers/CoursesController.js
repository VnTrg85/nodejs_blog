import {
  multipleMongooseToObject,
  mongooseToObject,
} from "../../util/mongoose.js";
import { course } from "../models/Course.model.js";

class CoursesController {
  // [GET] courses//:slug
  show(req, res, next) {
    course
      .findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("course/show", { course });
      })
      .catch(next);
  }
  //[GET] courses/create
  create(req, res, next) {
    res.render("course/create");
  }
  //[POST] courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hq720.jpg`;
    const obcourse = new course(formData);
    obcourse.save();
    res.redirect("/");
  }
}

var coursesController = new CoursesController();

export { coursesController };
