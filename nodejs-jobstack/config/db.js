const mysql = require('mysql');
const keys = require('./database');
// const Client = require('mysql').Client;
// var client = new Client(); 

// client.host = "remotemysql.com";
// client.user = 'RtG8BK6Pbe';
// client.password = 'bXH6YfYQMr';

// client.connect(function(err, results) {
//   if (err) {
//       console.log("ERROR: " + err.message);
//       throw err;
//   }
//   console.log("connected.");
// });

const con = mysql.createConnection({
    host: keys.db.host,
    user: keys.db.user,
    password: keys.db.password,
    database: keys.db.database
});

module.exports = con;