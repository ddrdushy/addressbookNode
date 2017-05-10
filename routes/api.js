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
  data.add(req.body)
      .then((data,err)=>{
        if(err)
            res.send('error');
        res.send('ok');
      });
});

router.post('/edit', function(req, res, next) {
    data.update(req.body)
        .then((data,err)=>{
            if(err)
                res.send('error');
            res.send('ok');
        });
});

router.post('/delete', function(req, res, next) {
    data.delete(req.body.id)
        .then((data,err)=>{
            if(err)
                res.send('error');
            res.send('ok');
        });
});
module.exports = router;
