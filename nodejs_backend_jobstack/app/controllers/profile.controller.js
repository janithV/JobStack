const db = require("../models");
const userCompany = db.usercompany;
const User = db.user;
const request = require('request');
// var querystring = require('querystring');


exports.getRecommendations = (req, res) => {
    var id = req.params.id;

    User.findOne({
        where: {
          userId: id
        }
      })
        .then(user => {
          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }

          const options ={
            url: 'http://127.0.0.1:5000/recommend',
            json: true,
            body: {
               cdskill : "ck" + user.codingSkill,
               scskill : "sk" + user.socialSkill,
               lsskill : "ls" + user.languageSkill,
               pdskill : "pd" + user.programDevelopment,
               degree : user.degreeId,
               feskil : "fe" + user.frontEndDevelopment,
               beskill : "be" + user.backEndDevelopment,
               fsskill : "fs" + user.fullStack,
               mdskill :"md" + user.mobileDevelopment,
               wdskill : "wd" + user.webDevelopment,
               uskill : "u" + user.uiUx
            }
          };

          request.post(options,
            (error, res, body) => {
                if(error) {
                    console.error(error);
                    return;
                }
                console.log(body);
            });

            res.status(200).send({message: "Works"});
    });

};