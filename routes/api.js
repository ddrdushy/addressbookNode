var express = require('express');
var router = express.Router();

var data = require('../src/api/contacts');

router.get('/all', function(req, res, next) {
    data.all()
        .then((data)=>{
            res.json(data);
        });
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
