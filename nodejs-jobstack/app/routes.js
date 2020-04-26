module.exports = function(app, passport) { 
 require("../config/updateProfile"); 
 var con = require('../config/db');
 var currentUser = 0;
 app.get('/', function(req, res){
  res.render('index.ejs');
 });

 app.get('/login', function(req, res){
  res.render('login.ejs', {message:req.flash('loginMessage')});
 });

 app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
 }),
  function(req, res){
   if(req.body.remember){
    req.session.cookie.maxAge = 1000 * 60 * 3;
   }else{
    req.session.cookie.expires = false;
   }
   res.redirect('/');
  });

  app.get('/update', function(req, res){
    res.render('update.ejs', {
        user:req.user
    });
   });
  
  app.post('/update', isLoggedIn, function (req,res) {
    currentUser = req.user;
    var updateUserMysql = { 
      birthdate: req.body.dob,
      gender: req.body.gender,
      university: req.body.university,
      school: req.body.school,
      qualification: req.body.degree,
     };
     console.log(updateUserMysql);
  
    var query = "UPDATE UserTable SET school = ?, university = ?, dateOfBirth = ?, gender = ? WHERE userId = ?;";
    
    con.query(query,[updateUserMysql.school, updateUserMysql.university, updateUserMysql.birthdate, updateUserMysql.gender, req.user.userId],
      function(err, rows){
        if (err) console.log(err); 
        return (null, updateUserMysql);
      });

      res.redirect('/profile');

  });

 app.get('/signup', function(req, res){
  res.render('signup.ejs', {message: req.flash('signupMessage')});
 });

 app.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/',
  failureFlash: true
 }));

 app.get('/profile', isLoggedIn, function(req, res){
   currentUser = req.user;
   module.exports.currentUser = currentUser;
  res.render('profile.ejs', {
   user:req.user
  });
 });

 app.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
 }
 );

};

function isLoggedIn(req, res, next){
 if(req.isAuthenticated()) 
  return next();

 res.redirect('/');
}
