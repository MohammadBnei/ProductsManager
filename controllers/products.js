const Products = require ('../models').Products;
const Restaurants = require ('../models').Restaurants;
const Sequelize = require('sequelize');

module.exports = {
    // CRUD
    create(req, res) {
        return Products
        .create(req.body)
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
}