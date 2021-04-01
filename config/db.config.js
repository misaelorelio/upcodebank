//db.config.js
'use strict';
const mysql = require ('mysql');
// conexão local mysql db
const dbConn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password : '',
  database: 'upcodebank'
});
dbConn.connect (function (err) {
  if (err) throw err;
  console.log ("Banco de dados conectado!");
});
module.exports = dbConn;