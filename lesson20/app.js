var express = require('express');
// const { runSql, queryPromise } = require('db/index')
const sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/test.db')

//执行sql语句
const runSql = async (sql) => {
    return new Promise(async (resolve, reject) => {
      db.run(sql, (err) => {
        resolve(err)
      })
    })
}

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World1');
})

app.get('/get', function (req, res1) {
    
    const TEST_LIST_SQL = `SELECT * FROM user ORDER BY id DESC`;
    db.all(TEST_LIST_SQL, (err, res2) => {
    if (err) {
        console.log('查询数据列表失败::');
        console.log(err)
        return;
    }
    console.log('查询数据列表成功::');
    console.log(res2)
    res1.send('Hello World' + JSON.stringify(res2));
});

})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})