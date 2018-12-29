var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页', pathname: req.route.path });
});
router.get('/abouts', function(req, res, next) {
  res.render('abouts/aboutsAs', { title: '关于我们', pathname: req.route.path });
});
router.get('/schoolIntroduction', function(req, res, next) {
  res.render('nav/schoolIntroduction', { title: '学校介绍', pathname: req.route.path});
});
router.get('/admissionManagement', function(req, res, next) {
  res.render('nav/admissionManagement', { title: '入学办理', pathname: req.route.path});
});
router.get('/contactUs', function(req, res, next) {
  res.render('nav/contactUs', { title: '联系我们', pathname: req.route.path});
});
router.get('/cooperativeColleges', function(req, res, next) {
  res.render('nav/cooperativeColleges', { title: '合作院校', pathname: req.route.path});
});
router.get('/news', function(req, res, next) {
  res.render('nav/news', { title: '新闻动态', pathname: req.route.path});
});
router.get('/teachingUnit', function(req, res, next) {
  res.render('nav/teachingUnit', { title: '教学单位', pathname: req.route.path});
});

module.exports = router;
