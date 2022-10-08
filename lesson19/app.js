var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/get', function (req, res) {
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
        res.send('Hello World:' +  results[0].solution);
    }); 
   
})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://localhost:8082", host, port)
})