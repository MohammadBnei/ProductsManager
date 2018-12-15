const Infos = require ('../models').Infos;
module.exports = {
    create(req, res) {
        return Infos
        .create({
            language: req.body.language,
            name: req.body.name,
            description: req.body.description
        })
        .then(info => res.status(201).send(info))
        .catch(error => res.status(400).send(error))
    },
    getInfos(req, res) {
        return Infos
        .all()
        .then(infos => res.status(201).send(infos))
        .catch(error => res.status(400).send(error))
    }
}