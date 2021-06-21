const newsRoute = require('./news');
const siteRoute = require('./site');
function route(app){
    app.get('/',siteRoute);
    
    
    app.use('/news',newsRoute);

    //app.use('/news/:slug',newsRoute);
    // app.get('/news',(req, res)=>{
    //     res.render('news');
    // });

}

module.exports = route;