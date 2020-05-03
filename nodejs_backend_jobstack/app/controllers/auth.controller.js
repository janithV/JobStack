const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signup = (req, res) => {
  // Save User to Database
  console.log("signing in");
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
  User.create({
    userEmail: req.body.username,
    userPassword: bcrypt.hashSync(req.body.password, 8),
    userFirstname: req.body.firstname,
    userLastname: req.body.lastname,
    dateOfBirth: req.body.birthDate,
    gender: req.body.gender,
    school: req.body.nameOfSchool,
    university: req.body.nameOfUni,
    degreeId: req.body.degreeQual,
    codingSkill: codeskill,
    socialSkill: socialskill,
    languageSkill: langSkill,
    programDevelopment: programDev,
    frontEndDevelopment: frontend,
    backEndDevelopment: backend,
    fullstack: fullstack,
    mobileDevelopment: mobile,
    webDevelopment: web,
    uiUx: uiux
  })
  .then(user => {
    console.log(user);
    res.send({ message: "User registered successfully!" });
    // var token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
    //   expiresIn: 1440
      
    // });
    // res.json({ token: token });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
   
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      userEmail: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.userPassword
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          userEmail: user.username,
          accessToken: token
        });
      })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
