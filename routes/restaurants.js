const restaurantsController = require('../controllers').restaurants;
const sessionUtils = require('../middleware/sessionUtils');


module.exports = (router) => {
    // Restaurant CRUD request handling
    router.get('/restaurants', restaurantsController.getRestaurants)
    router.get('/restaurant/:id', restaurantsController.getRestaurant)
    router.post('/restaurant', restaurantsController.create)
    router.put('/restaurant/:id', restaurantsController.update)
    router.delete('/restaurant/:id', restaurantsController.delete)

    // Get all infos in a langage from a restaurant
    router.get('/restaurant/infos/list',sessionUtils.checkSessionRestaurant, restaurantsController.getRestaurantInfos)

}