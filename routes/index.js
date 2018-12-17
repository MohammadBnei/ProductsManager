const restaurant = require('./restaurants');
const info = require('./infos');
const product = require('./products');

module.exports = (router) => {
    restaurant(router),
    info(router),
    product(router)
}