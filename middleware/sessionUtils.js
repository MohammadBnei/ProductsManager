module.exports = {
    checkSessionRestaurant(req, res, next) {
        if (!req.session.restaurant){
            console.warn('Session\s restaurant not set')
            return res.status(400).send(new Error('Session\s restaurant not set'));
        }
        next();
    }
}