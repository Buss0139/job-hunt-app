var app = require('express');
var path = require('path');

var router = app.Router();

router.get('/', function(request, response){
   response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
