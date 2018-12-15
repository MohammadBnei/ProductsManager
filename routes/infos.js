var express = require('express');
var router = express.Router();
const infosController = require('../controllers').infos;

//Handling all the infos call
router.get('infos', infosController.getInfos);
router.post('info', infosController.create);

module.exports = router;