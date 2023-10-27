import { course } from "../models/Course.model.js";

class SitesController {
  // GET HOME page
  async home(req, res) {
    try {
      const courses = await course.find({});
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "ERROR!!!" });
    }
  }
  //GET SEARCH PAGE
  search(req, res) {
    res.render("search");
  }
}

var sitesController = new SitesController();

export { sitesController };
