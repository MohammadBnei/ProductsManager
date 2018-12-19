const restaurant = require('./restaurants');
const info = require('./infos');
const product = require('./products');
const common = require('./common');

module.exports = (router) => {
    restaurant(router),
    info(router),
    product(router),
    common(router)
}