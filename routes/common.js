const commonController = require('../controllers').common;
const sessionUtils = require('../middleware/sessionUtils');

module.exports = (router) => {
    router.use('/', sessionUtils.checkId)
    // Get session's restaurant
    router.get('/session/restaurant', commonController.getSessionRestaurant)
    // Set session's restaurant 
    router.put('/session/restaurant', commonController.setSessionRestaurant)

    // Get session's restaurant
    router.get('/session/language', commonController.getSessionLanguage)
    // Set session's restaurant 
    router.put('/session/language', commonController.setSessionLanguage)
    
}