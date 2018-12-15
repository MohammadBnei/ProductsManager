const restaurantsController = require('../controllers').restaurants;
const infosController = require('../controllers').infos;

module.exports = (app) => {
    app.get('/restaurants', restaurantsController.getRestaurants)
    app.post('/restaurant', restaurantsController.create)
    app.get('/infos', infosController.getInfos)
    app.post('/info', infosController.create)
}