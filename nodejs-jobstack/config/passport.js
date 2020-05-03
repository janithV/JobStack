var LocalStrategy = require("passport-local").Strategy;

var bcrypt = require('bcrypt-nodejs');
var con = require('./db');

con.connect((err) => {
  if(err) throw err;
  console.log("Database connected");
});

module.exports = function(passport) {
 passport.serializeUser(function(user, done){
  done(null, user.userId);
 });

 passport.deserializeUser(function(user, done){
   console.log(user);
  con.query("SELECT * FROM UserTable WHERE userId = ? ", [user],
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
      if (req.body.codingSkill) {
        var codeskill = 1;
      }
      else{
        codeskill = 0;
    }
    if (req.body.socialSkill) {
      var socialskill = 1;
    }
    else{
      socialskill = 0;  
  }
  if (req.body.webDev) {
    var webDev = 1;
  }
  else{
    webDev = 0;  
}
if (req.body.langSkill) {
  var langSkill = 1;
}
else{
  langSkill = 0;  
}
if (req.body.programDev) {
  var programDev = 1;
}
else{
  programDev = 0;  
}

if (req.body.backend) {
  var backend = 1;
}
else{
  backend = 0;  
}
if (req.body.frontend) {
  var frontend = 1;
}
else{
  frontend = 0;  
}
if (req.body.fullstack) {
  var fullstack = 1;
}
else{
  fullstack = 0;  
}
if (req.body.mobile) {
  var mobile = 1;
}
else{
  mobile = 0;  
}
if (req.body.web) {
  var web = 1;
}
else{
  web = 0;  
}
if (req.body.uiux) {
  var uiux = 1;
}
else{
  uiux = 0;  
}

   con.query("SELECT * FROM UserTable WHERE userEmail = ? ",                                  
   [username], function(err, rows){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'That is already taken'));
    }else{
     var newUserMysql = { 
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthDate: req.body.birthDate,
      gender: req.body.gender,
      username: username,
      password: bcrypt.hashSync(password, null, null),
      nameOfUni: req.body.nameOfUni,
      nameOfSchool: req.body.nameOfSchool,
      degreeQual: req.body.degreeQual ,
      codingSkill: codeskill,
      socialSkill: socialskill,
      webDev: webDev,
      langSkill: langSkill,
      programDev: programDev,
      backend: backend,
      frontend: frontend,
      fullstack: fullstack,
      web: web,
      mobile: mobile,
      uiux: uiux
     };
     console.log(newUserMysql);

     var insertQuery = "INSERT INTO UserTable (userFirstName, userLastName, nameOfSchool, nameOfUni, dateOfBirth, gender,	userEmail,	userPassword, codingSkill, socialSkill, languageSkill, programDevelopment, degreeId, frontEndDevelopment, backEndDevelopment, fullStack, mobileDevelopment, webDevelopment, uiUx) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";

     con.query(insertQuery, [newUserMysql.firstname, newUserMysql.lastname, newUserMysql.nameOfSchool, newUserMysql.nameOfUni, newUserMysql.birthdate, newUserMysql.gender, newUserMysql.username, newUserMysql.password,newUserMysql.codingSkill,newUserMysql.socialSkill,newUserMysql.langSkill,newUserMysql.programDev,newUserMysql.degreeQual, newUserMysql.frontend, newUserMysql.backend, newUserMysql.fullstack, newUserMysql.mobile, newUserMysql.web, newUserMysql.uiux],
      function(err, rows){
       newUserMysql.userId = rows.insertId;
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
   con.query("SELECT * FROM UserTable WHERE userEmail = ? ", [username],
   function(err, rows){
    if(err)
     return done(err);
     
    if(!rows.length){
      
    }

    if(!bcrypt.compareSync(password, rows[0].userPassword))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));
    
    return done(null,rows[0]);
   });
  })
 );
};