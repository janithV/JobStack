const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var con = require('./db');


router.post('/rateindex', function (req, res) {
    var currentUser = req.user;
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
    
    var newRating = {
        userId:1,
        company: req.body.company,
        good: Good,
        average: Average,
        bad: Bad,
        rating: req.body.rating,
        date:req.body.date
    
    };
    console.log(newRating);

    var insertQuery = "INSERT INTO RatingsTable (userId, companyId, dateRated, salary, rating, good, average, bad) values(?,?,?,?,?,?,?,?);";
    var token = jwt.sign({ newRating }, 'secret_key');
    con.query(insertQuery, [newRating.userId, newRating.company, newRating.date, newRating.salary, newRating.rating, newRating.good, newRating.average, newRating.bad],
        function(err,rows){
            if (err) console.log(err); 
            return (null, newRating);
        });
        res.json({
          token:token,
          success: true
        });
      });

    module.exports = router;