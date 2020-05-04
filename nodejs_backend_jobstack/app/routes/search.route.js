const controller = require('../controllers/search.controller');

module.exports = (app) => {
    app.get('/api/company/search/:companyName', controller.search);
}