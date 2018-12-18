const restaurantsController = require('../controllers').restaurants;
const sessionUtils = require('../middleware/sessionUtils');


module.exports = (router) => {
    // Restaurant CRUD request handling
    router.get('/restaurants', restaurantsController.getRestaurants)
    router.get('/restaurant/:restaurantId', restaurantsController.getRestaurant)
    router.post('/restaurant', restaurantsController.create)
    router.put('/restaurant/:restaurantId', restaurantsController.update)
    router.delete('/restaurant/:restaurantId', restaurantsController.delete)

    // Get all infos in a langage from a restaurant
    router.get('/restaurant/infos/list',sessionUtils.checkSessionRestaurant, restaurantsController.getRestaurantInfos)

    // Set restaurant session 
    router.get('/restaurant/:restaurantId/setSession', restaurantsController.setSessionRestaurant)
}