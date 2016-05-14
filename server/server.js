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

/*pg.defaults.ssl = true;

console.log('pg looks like ' + pg.defaults.ssl);
pg.connect(config.db, function(err, client) {
  if (err) { console.log('Failed to connect to postgres ' + err); return; }
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});*/

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
