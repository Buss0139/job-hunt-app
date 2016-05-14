var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var index = require('./routes/index');
var main = require('./routes/main');
var sample = require('./routes/sample');

var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

// ROUTES
app.use('/main', main);
app.use('/sample', sample);
app.use('/', main);



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

 // SERVER
var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;
