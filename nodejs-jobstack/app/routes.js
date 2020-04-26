module.exports = function(app, passport,) { 
var express = require('express');
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

  const router = require('../config/updateProfile');

  app.use(router);

  const routerRateForm = require('../config/app');

  app.use(routerRateForm);

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
