const db = require("../models");
const config = require("../config/auth.config");
const Rate = db.rating;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.rating = (req, res) => {
    // Save User to Database
    console.log("rating company");
    if (req.body.review == "Good") {
        var Good = 1;
      }
      else{
        Good = 0;
      }
    
      if (req.body.review == "Average") {
        var Average = 1;
      }
      else{
        Average = 0;
      }
    
      if (req.body.review == "Bad") {
        var Bad = 1;
      }
      else{
        Bad = 0;
      }
    Rate.create({
      companyId: req.body.company,
      good: Good,
      average: Average,
      bad: Bad,
      rating: req.body.rating,
      dateRated: req.body.dateRated
    })
    .then(user => {
      console.log(user);
      res.send({ message: "Company rated successfully!" });
      // var token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
      //   expiresIn: 1440
        
      // });
      // res.json({ token: token });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

    var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          userEmail: user.username,
          accessToken: token
        });
  };