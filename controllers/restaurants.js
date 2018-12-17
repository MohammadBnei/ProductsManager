const Restaurants = require ('../models').Restaurants;
module.exports = {
    // CRUD
    create(req, res) {
        return Restaurants
        .create({
            address: req.body.address
        })
        .then(restaurant => res.status(201).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    getRestaurants(req, res) {
        return Restaurants
        .all()
        .then(restaurants => res.status(200).send(restaurants))
        .catch(error => res.status(400).send(error))
    },
    // Fetch a restaurant by its id
    getRestaurant(req, res) {
        return Restaurants
        .findById(req.params.restaurantId)
        .then(restaurant => res.status(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return Restaurants
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
        return Restaurants
        .destroy({
            cascade: true,
            where: { 
                id: req.params.restaurantId,
            }
        })
        .then(restaurant => res.sendStatus(200).send(restaurant))
        .catch(error => res.status(400).send(error))
    },
}