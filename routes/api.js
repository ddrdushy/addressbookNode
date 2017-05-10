var express = require('express');
var router = express.Router();

router.get('/all', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/edit', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/delete', function(req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;
