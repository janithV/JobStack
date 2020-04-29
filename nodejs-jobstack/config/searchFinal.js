const express = require('express');
const router = express.Router();
var con = require('./db');

router.get('/search', function(req,res){
  res.render('search.ejs');
});

router.get('/search',function(req,res){
  con.query('SELECT companyName from CompanyTable where companyName like "%'+req.query.key+'%"', function(err, rows, fields) {
      if (err) throw err;
      var data=[];
      for(i=0;i<rows.length;i++)
        {
          data.push(rows[i].companyName);
        }
        res.end(JSON.stringify(data));
    });
  });

  module.exports = router;