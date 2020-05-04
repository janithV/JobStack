const { verifySignUp } = require("../middleware");
const controller = require("../controllers/rate.controller");

module.exports = (app) => {

  app.post("/api/company/review", controller.rating);

  app.get("/api/company/reviews/:companyName", controller.getRating);

};
