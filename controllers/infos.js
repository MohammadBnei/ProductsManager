const Infos = require ('../models').Infos;
const Restaurants = require ('../models').Restaurants;
const Products = require ('../models').Products;

module.exports = {
    // CRUD
    create(req, res) {
        return Infos
        .create({
            ...req.body,
            language: req.body.language,
        })
        .then(info => res.status(201).send(info))
        .catch(error => res.status(400).send(error))
    },
    getInfos(req, res) {
        return Infos
        .all()
        .then(infos => res.status(201).send(infos))
        .catch(error => res.status(400).send(error))
    },
    getInfo(req, res) {
        return Infos
        .findById(req.params.infoId)
        .then(info => res.status(200).send(info))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        return Infos
        .destroy({
            where: { id: req.params.infoId }
        })
        .then(info => res.sendStatus(200).send(info))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return Infos
        .update(req.body, {
            where: {id: req.params.infoId}
        })
        .then(info => res.status(200).send(info))
        .catch(error => res.status(400).send(error))
    },

    // Fetch all infos from a restaurant
    getRestaurantInfos(req, res) {
        var id = req.session.restaurant ? req.session.restaurant.id : req.params.restaurantId;
        return Infos
        .findAll({
            where: {
                language: req.session.language,
                restaurantId: id
            },
        })
        .then(infos => res.status(200).send(infos))
        .catch(error => res.status(400).send(error))
    },

    // Fetch all infos from a product
    getProductInfos(req, res) {
        var id = req.session.product ? req.session.product.id : req.params.productId;
        return Infos
        .findAll({
             where: {
                language: req.session.language,
                productId: id
            },
        })
        .then(infos => res.status(200).send(infos))
        .catch(error => res.status(400).send(error))
    },
}