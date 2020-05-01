module.exports = function(app, passport) { 
var express = require('express');
 var con = require('../config/db');
 const router = require('../config/updateProfile');
 const routerRateForm = require('../config/app');
 const searchFunc = require('../config/searchFinal');
 var currentUser = 0;
 app.use(express.static(__dirname + '/app'));

 app.get('/', function(req, res){
  res.send(status = "20");
 });

 app.get('/login', function(req, res){
  res.render('login.ejs', {message:req.flash('loginMessage')});
 });

 app.post('/login', passport.authenticate('local-login'
 ),
  function(req, res){
   if(req.body.remember){
    req.session.cookie.maxAge = 1000 * 60 * 3;
   }else{
    req.session.cookie.expires = false;
   }
   res.json({success: true})
  });

  app.use(router);
  app.use(routerRateForm);
  app.use(searchFunc);

 app.get('/signup', function(req, res){
  res.render('signup.ejs', {message: req.flash('signupMessage')});
 });

 app.post('/signup', passport.authenticate('local-signup'
 ));

 app.get('/profile', isLoggedIn, function(req, res){
   currentUser = req.user;
   module.exports.currentUser = currentUser;
   res.render('profile.ejs', {
   user:req.user
  });
 });

 app.get('/logout', function(req,res){
  req.logout();
  res.json({success: true});
 }
 );

};

function isLoggedIn(req, res, next){
 if(req.isAuthenticated()) 
  return next();

 res.json({});
}
