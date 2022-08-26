var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'test'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
if (error) throw error;
console.log('The solution is: ', results[0].solution);
}); 

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})