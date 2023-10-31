class NewsController {
  //GET NEWS
  index(req, res) {
    res.render("news");
  }
}

var newsController = new NewsController();

export { newsController };
