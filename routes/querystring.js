var express = require('express');
var router = express.Router();
var URLModel = require('../model/URLModel');

router.get('/', function(req, res){
    res.render('main');
});

router.post('/', function(req, res){
    var URL = new URLModel({
        url : req.body.url
    });
    URLModel.findOne( { url : req.body.url }, function(err, result){
        if(!result){
            URL.save(function(err){
                res.redirect('/'+req.body.url);
            });
        } else{
            res.send('<script>alert("동일한 URL이 존재합니다.");location.href="";</script>')
        }
    })

});

router.get('/:url', function (req, res){
    URLModel.findOne( { url : req.params.url }, function(err, result){
        if(!result){
            res.send('<script>alert("URL이 존재하지 않습니다.");location.href="/";</script>')
        } else{
            res.send(req.params.url);
        }
    })
});

module.exports = router;