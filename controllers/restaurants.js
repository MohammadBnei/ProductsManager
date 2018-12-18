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
        return models.Restaurant
        .findAll({
            subQuery: false,
            include: [{ all:true }]
        })
        .then(restaurants => res.status(200).send(restaurants))
        .catch(error => res.status(400).send(error))
    },
    // Fetch a restaurant by its id
    getRestaurant(req, res) {
        return models.Restaurant
        .findById(req.params.restaurantId)
        .then(restaurant => res.status(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return models.Restaurant
        .update({
            address: req.body.address
        }, {
            where: {
                id: req.params.restaurantId
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
                id: req.params.restaurantId,
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

    // Set the session's restaurant
    setSessionRestaurant(req, res) {
        console.log(req.params)
        return models.Restaurant
        .findByPk(req.params.restaurantId)
        .then(restaurant => {
            req.session.restaurant = restaurant;
        res.status(200).send(restaurant);
        })
        .catch(error => res.status(400).send(error));
    },
}