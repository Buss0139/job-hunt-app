var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, './public')));
app.use('/', index);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
