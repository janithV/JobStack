var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
    extended: false
   }));

app.set('veiw engine', 'ejs');

app.listen(port);
console.log("Port: " + port);
 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "RtG8BK6Pbe",
  password: "bXH6YfYQMr",
  database: "RtG8BK6Pbe"
});

// con.query('USE ' + con.database);

con.connect(function(err) {
if (err) console.log(err);
console.log("Connected!");
});


app.get('/', function(req,res){
    res.render('rateindex.ejs');
});

app.post('/rateindex', function (req, res) {
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

      var userid = 4;
    
    var newRating = {
        userId:userid,
        company: req.body.company,
        good: Good,
        average: Average,
        bad: Bad,
        rating: req.body.rating,
        date:req.body.date
    
    };
    console.log(newRating);

    var insertQuery = "INSERT INTO RatingsTable (userId, companyId, dateRated, salary, rating, good, average, bad) values(?,?,?,?,?,?,?,?);";

    con.query(insertQuery, [newRating.userId, newRating.company, newRating.date, newRating.salary, newRating.rating, newRating.good, newRating.average, newRating.bad],
        function(err,rows){
            if (err) console.log(err); 
            return (null, newRating);
        });
    });