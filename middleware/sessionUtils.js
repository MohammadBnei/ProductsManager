module.exports = {
    checkSessionRestaurant(req, res, next) {
        if (!req.session.restaurant){
            console.warn('Session\s restaurant not set')
            return res.status(400).send(new Error('Session\s restaurant not set'));
        }
        next();
    },
    
    checkId(req, res, next) {
        if (req.params.id && req.params.id.isNaN && req.params.id <= 0){
            let err = new Error('There is an error with the id provided')
            console.warn(err)
            return res.status(400).send(new Error(err));
        }
        next();
    }
}