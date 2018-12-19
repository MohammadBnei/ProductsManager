const models = require ('../models');

module.exports = {
    // CRUD
    create(req, res) {
        models.Product.create({
            ...req.body,
            restaurantId: req.session.restaurant.id
            })
        .then(product => {
            var infos = req.body.infos
            infos.forEach((info) => {
                info.productId = product.id
                models.Info.create(info)
            })
            res.status(201).send({product, infos})
        })
        .catch(error => res.status(400).send(error))
    },
    getProducts(req, res) {
        return models.Product
        .findAll({
            include: [{
                model: models.Info,
                where: {
                    language: req.session.language.util
                }
            }]
        })
        .then(products => res.status(200).send(products))
        .catch(error => res.status(400).send(error))
    },
    getProduct(req, res) {
        return models.Product
        .findByPk(req.params.id, {
            subQuery: false,
            include: [{
                model: models.Info,
                where: {
                    language: req.session.language.util
                }
            }]
        })
        .then(product => res.status(200).send(product))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        return models.Product
        .destroy({
            where: { id: req.params.id }
        })
        .then(product => res.sendStatus(200).send(product))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return models.Product
        .update(req.body, {
            where: {id: req.params.id},
            include: [models.Info]
        })
        .then(product => res.status(200).send(product))
        .catch(error => res.status(400).send(error))
    },

    // Fetch all products from a restaurant
    getRestaurantProducts(req, res) {
        var id = req.params.id || req.session.restaurant.id
        return models.Product
        .findAll({
            where: {
                restaurantId: id
            },
            include: [{ all:true }]
        })
        .then(products => res.status(200).send(products))
        .catch(error => res.status(400).send(error))
    },
}