const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require('./routes/');
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Log requests to the console.

app.use(logger('dev'));

// Initialize session

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use((req, res, next) => {
    // Initialize session with english language
    req.session.language = req.session.language || {
        util: 'en',
        display: 'English'
    };
    next();
})

//Models
var models = require('./models');
 
//Sync Database
models.sequelize.sync({
    force: false
}).then(() => {
    console.log('DB connection OK!')
}).catch((err) => {
    console.log(err, 'Something went wrong with the DB Update!')
})

// Setting up the routes
routes(router);
app.use('/', router);

// default route
app.get('*', (req, res) => res.status(200).send({
    message: 'hello' 
    })
);

const port = process.env.PORT || 8080;
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(port, function () {
    console.log('Node app is running on port :',port);
});