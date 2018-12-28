var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});
router.get('/abouts', function(req, res, next) {
  res.render('abouts/aboutsAs', { title: '关于我们' });
});

module.exports = router;
