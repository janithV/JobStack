const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var codeskill = 0;
var socialskill = 0;
var webDev = 0;
var langSkill = 0;
var programDev = 0;
var backend = 0;
var frontend = 0;
var fullstack = 0;
var mobile = 0;
var web = 0;
var uiux = 0;



exports.signup = (req, res) => {
  // Save User to Database
  console.log("signing in");
  if (req.body.codingSkill) {
    codeskill = 1;
  }
  else{
    codeskill = 0;
  }
  if (req.body.socialSkill) {
    socialskill = 1;
  }
  else{
    socialskill = 0;  
  }
  if (req.body.webDev) {
  webDev = 1;
  }
  else{
  webDev = 0;  
  }
  if (req.body.langSkill) {
   langSkill = 1;
  }
  else{
  langSkill = 0;  
  }
  if (req.body.programDev) {
  programDev = 1;
  }
  else{
  programDev = 0;  
  }

  if (req.body.backend) {
   backend = 1;
  }
  else{
  backend = 0;  
  }
  if (req.body.frontend) {
   frontend = 1;
  }
  else{
  frontend = 0;  
  }
  if (req.body.fullstack) {
   fullstack = 1;
  }
  else{
  fullstack = 0;  
  }
  if (req.body.mobile) {
   mobile = 1;
  }
  else{
  mobile = 0;  
  }
  if (req.body.web) {
   web = 1;
  }
  else{
  web = 0;  
  }
  if (req.body.uiux) {
   uiux = 1;
  }
  else{
  uiux = 0;  
  }
  User.create({
    userEmail: req.body.username,
    userPassword: bcrypt.hashSync(req.body.password, 8),
    userFirstName: req.body.firstname,
    userLastName: req.body.lastname,
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
    fullStack: fullstack,
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

      var loggedinUser = {
        id: user.userId,
        email: user.userEmail,
        userFirstName: user.userFirstName,
        userLastName: user.userLastName,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender,
        school: user.school,
        university: user.university,
        degreeId: user.degreeId,
        codingSkill: user.codingSkill,
        socialSkill: user.socialSkill,
        languageSkill: user.languageSkill,
        programDevelopment: user.programDevelopment,
        frontEndDevelopment: user.frontEndDevelopment,
        backEndDevelopment: user.backEndDevelopment,
        fullStack: user.fullStack,
        mobileDevelopment: user.mobileDevelopment,
        webDevelopment: user.webDevelopment,
        uiUx: user.uiUx};

      res.json(loggedinUser);

      // var token = jwt.sign({ user }, config.secret, {
      //   expiresIn: 86400 // 24 hours
      // })
});
};

exports.update = (req, res) => {
  // Save User to Database
  console.log("updating user");

  var id = 0;

  User.findOne({
    where: {
      userEmail: req.body.username
    }
  })
    .then(user => { 
      id =  user.userId;
      console.log(id);
    });

  if (req.body.codingSkill) {
    codeskill = 1;
  }
  else{
    codeskill = 0;
  }
  if (req.body.socialSkill) {
    socialskill = 1;
  }
  else{
    socialskill = 0;  
  }
  if (req.body.webDev) {
  webDev = 1;
  }
  else{
  webDev = 0;  
  }
  if (req.body.langSkill) {
  langSkill = 1;
  }
  else{
  langSkill = 0;  
  }
  if (req.body.programDev) {
  programDev = 1;
  }
  else{
  programDev = 0;  
  }

  if (req.body.backend) {
  backend = 1;
  }
  else{
  backend = 0;  
  }
  if (req.body.frontend) {
  frontend = 1;
  }
  else{
  frontend = 0;  
  }
  if (req.body.fullstack) {
  fullstack = 1;
  }
  else{
  fullstack = 0;  
  }
  if (req.body.mobile) {
  mobile = 1;
  }
  else{
  mobile = 0;  
  }
  if (req.body.web) {
  web = 1;
  }
  else{
  web = 0;  
  }
  if (req.body.uiux) {
  uiux = 1;
  }
  else{
  uiux = 0;  
  }

  User.update(
    {
      userEmail: req.body.username,
      userPassword: bcrypt.hashSync(req.body.password, 8),
      userFirstName: req.body.firstname,
      userLastName: req.body.lastname,
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
      fullStack: fullstack,
      mobileDevelopment: mobile,
      webDevelopment: web,
      uiUx: uiux
    },
    {where: {userId: id}}
  )
  .then(() => {
    res.json({ status: 'User Updated!' });
  })
  .error(err => console.log(err));

};
