var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//MongoDB 접속
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var autoIncrement = require('mongoose-auto-increment');
 
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});
 
var connect = mongoose.connect('mongodb://127.0.0.1:27017/ed_beta', { useMongoClient: true });
autoIncrement.initialize(connect);

var test = require('./routes/test');
var querystring = require('./routes/querystring');
var post = require('./routes/post');

var app = express();
var port = 3001;

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/vendor', express.static(__dirname + '/vendor'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/test', test);
app.use('/', querystring);
app.use('/post', post);

app.listen( port, function(){
    console.log('Express listening on port', port);
});