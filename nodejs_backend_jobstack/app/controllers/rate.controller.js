const db = require("../models");
const Rate = db.rating;
const Company = db.company;

exports.rating = (req, res) => {
  let userId = req.body.userId;
  let company = req.body.companyName;
  let rate = req.body.rate;
  let review = req.body.review;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  Company.findOne({ where: { companyName: company } })
    .then(data => {
      let id = data.companyId;

      Rate.create({
        userId: userId,
        companyId: id,
        dateRated: today,
        rating: rate,
        review: review
      })
        .then(msg => {
          console.log(msg);
          res.status(200).send({
            msg: "Review added successfully"
          })
        }).catch(err => {
          res.status(500).send({ message: err.message });
        });

    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getRating = (req, res) => {
  company = req.body.companyName;

  Company.findOne({ where: { companyName: company } })
    .then(data => {
      let id = data.companyId;

      Rate.findAll({where: {companyId: id}})
      .then(reviews => {
        res.status(200).send({
          reviews: reviews
        });
      }).catch(err => {
        res.status(500).send({ message: err.message });
      });

    }).catch(err => {
      res.status(500).send({ message: err.message });
    });
}