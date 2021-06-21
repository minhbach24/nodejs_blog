class NewsController {
  //[GET]/NEWS
  index(req, res) {
    res.render('news');
  }

  //Show [GET] news/:slug

  show(req, res) {
    res.send('News Detail!!!!');
  }
}

module.exports = new NewsController();
const newsController = require('./NewsController');
