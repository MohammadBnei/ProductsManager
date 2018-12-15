var express = require('express');
var router = express.Router();
const restaurantsController = require('../controllers').restaurants;

//Handling all the restaurants call
router.get('restaurants', restaurantsController.getRestaurants);
router.post('restaurant', restaurantsController.create);

module.exports = router;