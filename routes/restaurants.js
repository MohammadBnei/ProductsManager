var express = require('express');
var router = express.Router();
const restaurantsController = require('../controllers').restaurants;

module.exports = (router) => {
    // Restaurants CRUD request handling
    router.get('/restaurants', restaurantsController.getRestaurants)
    router.get('/restaurant/:restaurantId', restaurantsController.getRestaurant)
    router.post('/restaurant', restaurantsController.create)
    router.put('/restaurant/:restaurantId', restaurantsController.update)
    router.delete('/restaurant/:restaurantId', restaurantsController.delete)

    // Add a restaurant with Info
    router.post('/restaurant/addWithInfo', restaurantsController.addWithInfo)
}