
const express = require('express');
const router = express.Router();
var con = require('./db');

router.get('/update', function(req, res){
    res.render('update.ejs', {
        user:req.user
    });
   });
  
  router.post('/update', isLoggedIn, function (req,res) {
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

  function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) 
     return next();
   
    res.redirect('/');
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