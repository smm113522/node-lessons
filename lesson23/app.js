var express = require('express');
const resAPI = require('./resAPI');

var Sequelize = require('sequelize');

const orm = require('./orm');
const { DataTypes } = require('sequelize');

const User = orm.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
        // allowNull 默认为 true
      }
    },
    {
      tableName: 'user',
      deletedAt: false,
      createdAt: false,
      updatedAt: false
    }
  );

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

async function list(req, res) {
    const data = await User.findAndCountAll({
        limit: 15
    });
    console.log(JSON.stringify(data))
    res.API(data);
}

app.get('/list', function (req, res) {
    let query = req.query;
    const data = list(req, res);
    res.send('Hello World' + JSON.stringify(data));
});

app.use(resAPI);

var server = app.listen(8023, function () {
    console.log("应用实例，访问地址为 http://localhost:8023")
})