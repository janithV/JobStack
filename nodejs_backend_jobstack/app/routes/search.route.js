const controller = require('../controllers/search.controller');

module.exports = (app) => {
    app.get('/api/company/search', controller.search);
}