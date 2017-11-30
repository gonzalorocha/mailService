var express		 = require('express');
var db 				 = require('./modules/db/db');
var bodyParser = require('body-parser');
var app 			 = express();
var api 			 = require('./routes/api');
var index      = require('./routes/index');

app.set('port', (process.env.PORT || 4000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/api', api);
app.use('/', index);

app.listen(app.get('port'), function() {
  db.connect();
  console.log('Node app is running on port', app.get('port'));
});
