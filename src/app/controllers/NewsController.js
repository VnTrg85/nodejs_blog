
class NewsController {
    //GET NEWS
    index(req,res) {
        res.render('news')
    }

    //SHOW SLUG
    show(req,res) {
        res.send("Slug")
    }
}

var newsController = new NewsController;

export {newsController}