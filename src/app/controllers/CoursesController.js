const Course = require('../model/Courses');
const { mongooseToObject } = require('../../util/mongoose');
class CoursesController {
    //Show [GET] courses/:slug

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course: mongooseToObject(course)
        })).catch(next);
        
    }

    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
        .then(()=> res.redirect('/me/stored/courses'))
        .catch(next);
    }
    //Show Course
    store(req, res, next) {
        const formData = req.body;
        // console.log(formData);
        //res.send(formData);
        req.body.image =
            'https://img.youtube.com/vi/' + formData.videoID + '/sddefault.jpg';
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CoursesController();
const courseController = require('./CoursesController');
