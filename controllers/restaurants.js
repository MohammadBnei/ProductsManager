const Restaurants = require ('../models').Restaurants;
module.exports = {
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
        .then(restaurants => res.status(201).send(restaurants))
        .catch(error => res.status(400).send(error))
    }
}