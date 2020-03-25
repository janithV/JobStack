var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {
 passport.serializeUser(function(user, done){
  done(null, user.userId);
 });

 passport.deserializeUser(function(id, done){
  connection.query("SELECT * FROM UserTable WHERE userId = ? ", [id],
   function(err, rows){
    done(err, rows[0]);
   });
 });

 passport.use(
  'local-signup',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){                                                      
      if (req.body.codingskills) {
        var codeskill = 1;
      }
      else{
        codeskill = 0;
    }
    if (req.body.socialskills) {
      var socialskill = 1;
    }
    else{
      socialskill = 0;  
  }
  if (req.body.webskills) {
    var webskill = 1;
  }
  else{
    webskill = 0;  
}
if (req.body.languageskills) {
  var langskill = 1;
}
else{
  langskill = 0;  
}
if (req.body.programeskills) {
  var programeskill = 1;
}
else{
  programeskill = 0;  
}

if (req.body.Specialization1) {
  var backend = 1;
}
else{
  backend = 0;  
}
if (req.body.Specialization2) {
  var frontend = 1;
}
else{
  frontend = 0;  
}
if (req.body.Specialization3) {
  var fullstack = 1;
}
else{
  fullstack = 0;  
}
if (req.body.Specialization4) {
  var mobile = 1;
}
else{
  mobile = 0;  
}
if (req.body.Specialization5) {
  var web = 1;
}
else{
  web = 0;  
}
if (req.body.Specialization6) {
  var uiux = 1;
}
else{
  uiux = 0;  
}

   connection.query("SELECT * FROM UserTable WHERE userEmail = ? ",                                  
   [username], function(err, rows){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'That is already taken'));
    }else{
     var newUserMysql = { 
      firstname: req.body.fname,
      lastname: req.body.lname,
      birthdate: req.body.dob,
      gender: req.body.gender,
      username: username,
      password: bcrypt.hashSync(password, null, null),
      university: req.body.university,
      school: req.body.school,
      qualification: req.body.degree ,
      codskill: codeskill,
      socskill: socialskill,
      webskill: webskill,
      langskill: langskill,
      programeskill: programeskill,
      backend: backend,
      frontend: frontend,
      fullstack: fullstack,
      web: web,
      mobile: mobile,
      uiux: uiux
     };
     console.log(newUserMysql);

     var insertQuery = "INSERT INTO UserTable (userFirstName, userLastName, school, university, dateOfBirth, gender,	userEmail,	userPassword, codingSkill, socialSkill, languageSkill, programDevelopment, degreeId, frontEndDevelopment, backEndDevelopment, fullStack, mobileDevelopment, webDevelopment, uiUx) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";

     connection.query(insertQuery, [newUserMysql.firstname, newUserMysql.lastname, newUserMysql.school, newUserMysql.university, newUserMysql.birthdate, newUserMysql.gender, newUserMysql.username, newUserMysql.password,newUserMysql.codskill,newUserMysql.socskill,newUserMysql.langskill,newUserMysql.programeskill,newUserMysql.qualification, newUserMysql.frontend, newUserMysql.backend, newUserMysql.fullstack, newUserMysql.mobile, newUserMysql.web, newUserMysql.uiux],
      function(err, rows){
       newUserMysql.id = rows.insertId;
       return done(null, newUserMysql);
      });
    }
   });
  })
 );

 passport.use(
  'local-login',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
   connection.query("SELECT * FROM UserTable WHERE userEmail = ? ", [username],
   function(err, rows){
    if(err)
     return done(err);
     
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }

    if(!bcrypt.compareSync(password, rows[0].userPassword))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));
    
    return done(null, rows[0]);
   });
  })
 );
};