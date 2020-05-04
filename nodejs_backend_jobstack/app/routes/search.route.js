const controller = require('../controllers/search.controller');

module.exports = (app) => {
    app.get('/api/auth/search/:companyName', controller.search);
}