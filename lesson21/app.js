var express = require('express');

const db = require('./mysql/db');

var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
    res.send("<h1>123</h1>")
});

app.get('/userList', (req, res, next) => {
    // sql查询user表
    db.query('select * from user', [], function(results, fields) {
        // 以json的形式返回
        res.json({ results })
    })
    // res.send("<h1>123</h1>")
})

var server = app.listen(8083, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(host)
    console.log(port)
    console.log("访问地址为 http://localhost:8083")
})