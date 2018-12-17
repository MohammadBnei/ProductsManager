const Products = require ('../models').Products;
const Restaurants = require ('../models').Restaurants;
const Sequelize = require('sequelize');

module.exports = {
    // CRUD
    create(req, res) {
        var restaurantId = req.session.restaurant ? req.session.restaurant.id : null;
        return Products
        .create({
            ...req.body,
            restaurantId: restaurantId
            })
        .then(product => res.status(201).send(product))
        .catch(error => res.status(400).send(error))
    },
    getProducts(req, res) {
        return Products
        .all()
        .then(products => res.status(200).send(products))
        .catch(error => res.status(400).send(error))
    },
    getProduct(req, res) {
        return Products
        .findById(req.params.productId)
        .then(product => res.status(200).send(product))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        return Products
        .destroy({
            where: { id: req.params.productId }
        })
        .then(product => res.sendStatus(200).send(product))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return Products
        .update(req.body, {
            where: {id: req.params.productId}
        })
        .then(product => res.status(200).send(product))
        .catch(error => res.status(400).send(error))
    },

    // Fetch all products from a restaurant
    getRestaurantProducts(req, res) {
        return Products
        .findAll({
            where: {
                restaurantId: req.params.restaurantId
            }
        })
        .then(products => res.status(200).send(products))
        .catch(error => res.status(400).send(error))
    },

    // Add a product with a name
    addWithInfo(req, res) {
        return Products
        .create({
            ...req.body,
            infos: req.body.info,
        }, {
            icnlude: [{
                model: Infos,
                as: 'infos'
            }]
        })
        .then(restaurant => res.sendStatus(201).send(restaurant))
        .catch(error => res.status(400).send(error))
    }
}