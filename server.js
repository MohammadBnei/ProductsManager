const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Log requests to the console.

app.use(logger('dev'));

//Models
var models = require('./models');
 
//Sync Database
models.sequelize.sync().then(() => {
    console.log('DB connection OK!')
}).catch((err) => {
    console.log(err, 'Something went wrong with the DB Update!')
})
 
//Require our routes into the application.
require('./routes')(app)

// default route
app.get('*', (req, res) => res.status(200).send({
    message: 'hello' 
    })
);

const port = parseInt(process.env.PORT, 10) || 8080;
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(port, function () {
    console.log('Node app is running on port :',port);
});