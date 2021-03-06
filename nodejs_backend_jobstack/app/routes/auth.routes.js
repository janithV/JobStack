const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const controller2 = require("../controllers/profile.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.put("/api/auth/update:id",controller.update);

  app.get("/api/auth/profile/:username",controller.getUserData);

  app.get("/api/auth/profile/recommendations/:id", controller2.getRecommendations);

  };



