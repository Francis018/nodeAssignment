var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

const nodemailer = require('nodemailer');


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));


// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);
app.use('/api', tasks);
app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/services', function(req, res){
    res.render('services');
});
app.listen(port, function(){
    console.log('Server started on port '+port);
});