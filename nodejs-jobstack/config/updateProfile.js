
const express = require('express');
const router = express.Router();
var con = require('./db');
var bcrypt = require('bcrypt-nodejs');

router.get('/update', function(req, res){
    res.render('update.ejs', {
        user:req.user
    });
   });
  
  router.post('/update', isLoggedIn, function (req,res) {
    currentUser = req.user;
    var updateUserMysql = { 
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, null, null),
      birthdate: req.body.dob,
      gender: req.body.gender,
      university: req.body.university,
      school: req.body.school,
      qualification: req.body.degree,
     };
     console.log(updateUserMysql);
  
    var query = "UPDATE UserTable SET school = ?, university = ?, dateOfBirth = ?, gender = ?, userEmail = ?, userPassword = ? WHERE userId = ?;";
    
    con.query(query,[updateUserMysql.school, updateUserMysql.university, updateUserMysql.birthdate, updateUserMysql.gender, updateUserMysql.username, updateUserMysql.password, req.user.userId],
      function(err, rows){
        if (err) {
          res.json({success: false});
        }
        else{ 
        res.json({
          values:updateUserMysql,
          success:true
        });
        }
        return (null, updateUserMysql);
      });

  });

  function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) 
     return next();
   }

  module.exports = router;











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