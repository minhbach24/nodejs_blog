
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../model/Courses');
class MeController {
    //[GET]/me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses',{
            courses: mutipleMongooseToObject(courses)
        }))
       .catch(next);
    }

    //Show [GET] news/:slug

    // search(req, res) {
    //     res.send('Course Detail!!!!');
    // }
}

module.exports = new MeController();
const meController = require('./MeController');