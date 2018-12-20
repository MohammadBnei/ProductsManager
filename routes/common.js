const commonController = require('../controllers').common;

module.exports = (router) => {
    // Get session's restaurant
    router.get('/session/restaurant', commonController.getSessionRestaurant)
    // Set session's restaurant 
    router.put('/session/restaurant', commonController.setSessionRestaurant)

    // Get session's restaurant
    router.get('/session/language', commonController.getSessionLanguage)
    // Set session's restaurant 
    router.put('/session/language', commonController.setSessionLanguage)
    
}