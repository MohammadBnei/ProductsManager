var express = require('express');
var router = express.Router();
const productsController = require('../controllers').products;


module.exports = (router) => {
    // Products CRUD request handling
    router.get('/products', productsController.getProducts)
    router.get('/product/:productId', productsController.getProduct)
    router.post('/product', productsController.create)
    router.put('/product/:productId', productsController.update)
    router.delete('/product/:productId', productsController.delete)

    // Add a product with Info
    router.post('/product/addWithInfo', productsController.addWithInfo)

    // Get all products from a restaurant
    router.get('/products/restaurant/:restaurantId', productsController.getRestaurantProducts)
}