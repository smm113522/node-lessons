var express = require('express');
var router = express.Router();
const db = require('mysql/db');


var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("<h1>123</h1>")
});

router.get('/userList', (req, res, next) => {
    // sql查询user表
    db.query('select * from list', [], function(results, fields) {
        // 以json的形式返回
        res.json({ results })
    })
})

var server = app.listen(8083, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host)
    console.log(port)
    console.log("访问地址为 http://localhost:8083")
})