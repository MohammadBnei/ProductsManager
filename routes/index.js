const restaurantsController = require('../controllers').restaurants;
const infosController = require('../controllers').infos;
const productsController = require('../controllers').products;

module.exports = (app) => {
    // Restaurants CRUD request handling
    app.get('/restaurants', restaurantsController.getRestaurants)
    app.get('/restaurant/:restaurantId', restaurantsController.getRestaurant)
    app.post('/restaurant', restaurantsController.create)
    app.put('/restaurant/:restaurantId', restaurantsController.update)
    app.delete('/restaurant/:restaurantId', restaurantsController.delete)

    // Infos CRUD request handling
    app.get('/infos', infosController.getInfos)
    app.get('/info/:infoId', infosController.getInfo)
    app.post('/info', infosController.create)
    app.put('/info/:infoId', infosController.update)
    app.delete('/info/:infoId', infosController.delete)

    // Products CRUD request handling
    app.get('/products', productsController.getProducts)
    app.get('/product/:productId', productsController.getProduct)
    app.post('/product', productsController.create)
    app.put('/product/:productId', productsController.update)
    app.delete('/product/:productId', productsController.delete)

    // Get all products from a restaurant
    app.get('/products/restaurant/:restaurantId', productsController.getRestaurantProducts)

    // Get all infos from a restaurant
    app.get('/infos/restaurant/:restaurantId', infosController.getRestaurantInfos)

    // Get all infos from a product
    app.get('/infos/product/:productId', infosController.getProductInfos)
}