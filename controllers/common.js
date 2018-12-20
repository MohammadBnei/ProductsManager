const models = require ('../models');

module.exports = {
    getSessionInformations(req, res) {
        return res.status(200).send(req.session)
    },
    // Get the session's language
    getSessionLanguage(req, res) {
        return res.status(200).send(req.session.language)
    },
    // Set the session's language
    setSessionLanguage(req, res) {
        req.session.language = req.body;
        console.log(req.session.language, req.body)
        return res.status(200).send(req.session.language);
    },
    // Get the session's restaurant
    getSessionRestaurant(req, res) {
        return res.status(200).send(req.session.restaurant)
    },
    // Set the session's restaurant
    setSessionRestaurant(req, res) {
        return models.Restaurant
        .findByPk(req.body.id, {
            subQuery: false,
            include: [{
                model: models.Info,
                where: {
                    language: req.session.language.util
                }
            }]
        })
        .then(restaurant => {
            req.session.restaurant = restaurant;
            console.log('Changed session\'s restaurant !', JSON.stringify(req.session.restaurant))
            res.status(200).send(restaurant);
        })
        .catch(error => res.status(400).send(error));
    },
}