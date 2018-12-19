const productsController = require('../controllers').products;
const sessionUtils = require('../middleware/sessionUtils');

module.exports = (router) => {
    // Product CRUD request handling
    router.get('/products/:id', sessionUtils.checkSessionRestaurant, productsController.getRestaurantProducts)
    router.get('/products', sessionUtils.checkSessionRestaurant, productsController.getRestaurantProducts)
    router.get('/product/:id', productsController.getProduct)
    router.post('/product', sessionUtils.checkSessionRestaurant, productsController.create)
    router.put('/product/:id', productsController.update)
    router.delete('/product/:id', productsController.delete)

    // Get all products from a restaurant
    router.get('/products/all', productsController.getProducts)
}