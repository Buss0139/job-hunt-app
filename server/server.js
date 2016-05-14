var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env];

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, './public')));
app.use('/', index);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
