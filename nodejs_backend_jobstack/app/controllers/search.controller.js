const model = require('../models');
const Company = model.company;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.search = (req, res) => {
    let company = req.params.companyName;
    if (company == 'all') {
        Company.findAll()
            .then(data => {
                res.status(200).send({
                    company: data
                })
            }).catch(err => {
                res.status(500).send({ message: err.message });
            });
    }
    else {
        Company.findAll({ where: { companyName: { [Op.like]: '%' + company + '%' } } })
            .then(data => {
                res.status(200).send({
                    company: data
                })
            }).catch(err => {
                res.status(500).send({ message: err.message });
            });
    }

};
