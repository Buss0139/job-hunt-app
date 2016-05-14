var express = require('express');
var app = express();
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/', index);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

pg.defaults.ssl = true;
pg.connect(config.db, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

module.exports = app;
