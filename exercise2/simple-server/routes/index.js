var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var renderObject = {
    title: 'Simple Webserver Example!',
    text: `${req.requestCount}, ${req.requestCount}2, ${req.requestCount}3`
  }
  res.render('index', renderObject);
});

module.exports = router;
