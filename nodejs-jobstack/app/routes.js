module.exports = function(app, passport) { 
var express = require('express');
 var con = require('../config/db');
 const router = require('../config/updateProfile');
 const routerRateForm = require('../config/app');
 const searchFunc = require('../config/searchFinal');
 var currentUser = 0;
 app.use(express.static(__dirname + '/app'));

 app.post('/login', passport.authenticate('local-login'),
  function(req, res){
   if(req.body.remember){
    req.session.cookie.maxAge = 1000 * 60 * 3;
   }else{
    req.session.cookie.expires = false;
   }
   res.json({
     success:true,
     block:false
    });
  });

  app.use(router);
  app.use(routerRateForm);
  app.use(searchFunc);

 app.post('/signup', passport.authenticate('local-signup'),
  function(req,res){
    res.json({success: true});
  });

 app.get('/profile', isLoggedIn, function(req, res){
   currentUser = req.user;
   module.exports.currentUser = currentUser;
   res.json({user: currentUser})
 });

};

function isLoggedIn(req, res, next){
 if(req.isAuthenticated()) 
  return next();

 res.json({status: loggedIn});
}
