const infosController = require('../controllers').infos;

module.exports = (router) => {
    // Info CRUD request handling
    router.get('/infos', infosController.getInfos)
    router.get('/info/:infoId', infosController.getInfo)
    router.post('/info', infosController.create)
    router.put('/info/:infoId', infosController.update)
    router.delete('/info/:infoId', infosController.delete)


    // Get all infos from a restaurant
    router.get('/infos/restaurant/:restaurantId', infosController.getRestaurantInfos)

    // Get all infos from a product
    router.get('/infos/product/:productId', infosController.getProductInfos)
}