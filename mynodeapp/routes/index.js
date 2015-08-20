var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(util.inspect(process.env, false, null));

  res.render('index', { title: 'Express' });
});

module.exports = router;
