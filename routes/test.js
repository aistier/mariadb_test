var express = require('express');
var router = express.Router();

var pool = require('../config/database');

router.get('/', async function(req, res){
    try {
        const result = await pool.query('SELECT now()');
        console.log(result);
        res.send(result);
    } catch (error) {
        throw new Error(error);
    }
});

router.post('/submit', async function(req, res){

    var no = req.body.no,
        user_name = req.body.user_name,
        user_tel = req.body.user_tel,
        reg_dt = req.body.reg_dt;
    try {
        const result = await pool.query('INSERT INTO request(no, user_name, user_tel, reg_dt) VALUES (?, ?, ?, ?)', [no, user_name, user_tel, reg_dt]);
        console.log(result);
        res.send(result);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = router;