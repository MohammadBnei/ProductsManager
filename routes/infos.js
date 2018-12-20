const infosController = require('../controllers').infos;
const sessionUtils = require('../middleware/sessionUtils');

module.exports = (router) => {
    router.use('*/:id', sessionUtils.checkId)
    // Info CRUD request handling
    router.get('/infos', infosController.getInfos)
    router.get('/info/:id', infosController.getInfo)
    router.post('/info', infosController.create)
    router.put('/info/:id', infosController.update)
    router.delete('/info/:id', infosController.delete)


    // Get all infos from a restaurant
    router.get('/infos/restaurant/:id', infosController.getRestaurantInfos)

    // Get all infos from a product
    router.get('/infos/product/:id', infosController.getProductInfos)
}