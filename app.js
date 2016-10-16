var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var painting_routes = require('./routes/paintings')
var user_routes = require('./routes/users')

var app = express();
var port = 3000;

mongoose.connect('mongodb://localhost/arthouse')
mongoose.Promise = global.Promise;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true;
}))

app.use('/users', user_routes)
app.use('/paintings', painting_routes)

app.listen(port);
console.log('Server running at port ' + port);
