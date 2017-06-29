var mysql=require('mysql');
var serverName='L5-HEALTH-HP8';
var dbName='burger_db';
var sqlLogin='customer';
var sqlPwd='P@55w0rd';

var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
if (process.env.JAWSDB_URL) {
     connection= new Sequelize(process.env.JAWSDB_URL);
    }
    else {
   connection = new Sequelize(dbName,sqlLogin, sqlPwd, {
        host: "L5-HEALTH-HP8",
        dialect: "mysql",
        pool: {
         max: 5,
         min: 0,
        idle: 10000
  }
})};


module.exports=connection;