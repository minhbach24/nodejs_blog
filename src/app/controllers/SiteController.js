const Course = require('../model/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET]/NEWS
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //Show [GET] news/:slug

    // search(req, res) {
    //     res.send('Course Detail!!!!');
    // }
}

module.exports = new SiteController();
const siteController = require('./SiteController');
