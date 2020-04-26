var route = require('../app/routes.js');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var con = require('./db');

app.use(cookieParser());
app.use(bodyParser.urlencoded({
 extended: true
}));

app.set('view engine', 'ejs');

module.exports = function(){


};












// updator = function update(){
//   console.log("IT WORKS BITCH");
//   var updateUserMysql = { 
//     birthdate: route.updateUserMysql.birthdate,
//     gender: req.body.gender,
//     username: username,
//     password: bcrypt.hashSync(password, null, null),
//     university: req.body.university,
//     school: req.body.school,
//     qualification: req.body.degree,
//     codskill: codeskill,
//     socskill: socialskill,
//     webskill: webskill,
//     langskill: langskill,
//     programeskill: programeskill,
//     backend: backend,
//     frontend: frontend,
//     fullstack: fullstack,
//     web: web,
//     mobile: mobile,
//     uiux: uiux
//    };
//    console.log(updateUserMysql);