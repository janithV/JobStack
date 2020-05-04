const model = require('../models');
const Company = model.company;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.search = (req, res) => {
    let company = req.body.company;
    Company.findAll({ where: { companyName: {[Op.like]: '%'+company+'%'}}})
    .then(data => {
        res.status(200).send({
            company: data
        })
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};
