var express = require('express');
// const { runSql, queryPromise } = require('db/index')
const sqlite3 = require('sqlite3');



var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/get', function (req, res) {
    
    // const result = runSql(
    //   `SELECT * FROM user`
    // )
    // let list = [...result]
    res.send('Hello World');

})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})