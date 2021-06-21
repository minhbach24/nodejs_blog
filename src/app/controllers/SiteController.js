class SiteController {
  //[GET]/NEWS
  index(req, res) {
    res.render('home');
  }

  //Show [GET] news/:slug

  search(req, res) {
    res.send('News Detail!!!!');
  }
}

module.exports = new SiteController();
const siteController = require('./SiteController');
