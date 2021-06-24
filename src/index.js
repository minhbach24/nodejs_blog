const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const router = require('./routers');
const db = require('./config/db');
app.use(express.static(path.join(__dirname, 'public')));

//Connect DB
db.connect();
//HTTP logger
app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Router init
router(app);

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
});
