var express = require('express');
var path  = require('path');
var router  = module.exports = express.Router();

router.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, '../', '/public/views/index/index.html'));
});
