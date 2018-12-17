const models = require ('../models');

module.exports = {
    // CRUD
    create(req, res) {
        return models.Restaurants
        .create(req.body)
        .then(restaurant => res.status(201).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    getRestaurants(req, res) {
        return models.Restaurants
        .findAll({
            subQuery: false,
            include: [{ all:true }]
        })
        .then(restaurants => res.status(200).send(restaurants))
        .catch(error => res.status(400).send(error))
    },
    // Fetch a restaurant by its id
    getRestaurant(req, res) {
        return models.Restaurants
        .findById(req.params.restaurantId)
        .then(restaurant => res.status(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return models.Restaurants
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
        return models.Restaurants
        .destroy({
            cascade: true,
            where: { 
                id: req.params.restaurantId,
            }
        })
        .then(restaurant => res.sendStatus(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },

    // Add a restaurant with a name
    addWithInfo(req, res) {
        console.log(req.body.info)
        return models.Restaurants
        .addInfo(req.body.info)
        .create({
            ...req.body,
            Infos: req.body.info,
        }, {
            include: [{
                model: models.Infos,
                as: 'infos'
            }]
        })
        .then(restaurant => res.status(201).send(restaurant))
        .catch(error => res.status(400).send(error))
    }
}