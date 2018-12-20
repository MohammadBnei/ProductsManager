const models = require ('../models');

module.exports = {
    // CRUD
    create(req, res) {
        models.Restaurant.create(req.body)
        .then(restaurant => {
            var infos = req.body.infos
            infos.forEach((info) => {
                info.restaurantId = restaurant.id
                models.Info.create(info)
            })
            res.status(201).send({restaurant, infos})
        })
        .catch(error => res.status(400).send(error))
    },
    getRestaurants(req, res) {
        console.log(req.session.language)
        return models.Restaurant
        .findAll({
            subQuery: false,
            include: [{
                model: models.Product
            }, {
                model: models.Info,
                where: {
                    language: req.session.language.util
                }
            }]
        })
        .then(restaurants => res.status(200).send(restaurants))
        .catch(error => res.status(400).send(error))
    },
    // Fetch a restaurant by its id
    getRestaurant(req, res) {
        return models.Restaurant
        .findByPk(req.params.id, {
            include: [{
                model: models.Product
                }, {
                model: models.Info,
                where: {
                    language: req.session.language.util
                }
            }]
        })
        .then(restaurant => res.status(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return models.Restaurant
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(restaurant => res.status(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        return models.Restaurant
        .destroy({
            cascade: true,
            where: { 
                id: req.params.id,
            }
        })
        .then(restaurant => res.sendStatus(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },

    // Get All infos from a restaurant
    getRestaurantInfos(req, res) {
        return req.session.restaurant.getInfosByLanguage(models, req.session.language)
        .then(restaurant => res.sendStatus(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
}