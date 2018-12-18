const productsController = require('../controllers').products;
const sessionUtils = require('../middleware/sessionUtils');

module.exports = (router) => {
    // Product CRUD request handling
    router.get('/products', sessionUtils.checkSessionRestaurant, productsController.getProducts)
    router.get('/product/:productId', productsController.getProduct)
    router.post('/product', productsController.create)
    router.put('/product/:productId', productsController.update)
    router.delete('/product/:productId', productsController.delete)

    // Get all products from a restaurant
    router.get('/products/restaurant/:restaurantId', productsController.getRestaurantProducts)
}