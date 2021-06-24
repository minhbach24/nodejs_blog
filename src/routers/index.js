const newsRoute = require('./news');
const meRoute = require('./me');
const courseRoute = require('./courses');
const siteRoute = require('./site');
function route(app) {
    
    
    app.use('/me',meRoute);
    app.use('/courses', courseRoute);
    app.use('/', siteRoute);

    //app.use('/news', newsRoute);

    //app.use('/news/:slug',newsRoute);
    // app.get('/news',(req, res)=>{
    //     res.render('news');
    // });
}

module.exports = route;
