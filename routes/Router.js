var express = requier('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/portfolio', function(req, res) {
    res.render('projects');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});