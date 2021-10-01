const User = require('../models/User');
const { mongooseToObject, multipleMongooseToObject } = require('../util/mongoose');
class UserController {

    // [GET] /User/:slug
    show(req, res, next) {
        User.find({})
            .then(user => {
                res.render('user/stored-user', {
                    user: multipleMongooseToObject(user)
                })
            })
            .catch(next)
    }
    // [GET] /
    create(req, res, next) {
        res.render('user/create')
    }
    store(req, res, next) {
        const user = new User(req.body)
        user
            .save()
            .then(() => { res.redirect('/') })
            .catch(next);
    }

}

module.exports = new UserController;