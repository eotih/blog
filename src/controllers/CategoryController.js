const Category = require('../models/Category')
const { multipleMongooseToObject, mongooseToObject } = require('../util/mongoose')
class CategoryController {
    // [GET] /
    index(req, res, next) {
        Promise.all([Post.find(), Post.findOne().sort('-createdAt')])
            .then(([post, postDetails]) => {
                res.render('home', {
                    other: mongooseToObject(postDetails),
                    post: multipleMongooseToObject(post)
                });
            })
            .catch(next)

    }
    storedMusic(req, res, next) {

    }
    // [GET] /
    create(req, res, next) {
        res.render('category/create')
    }
     //[POST] /category/store
     store(req, res, next) {
        const category = new Category(req.body)
        category
            .save()
            .then(() => { res.redirect('/') })
            .catch(next);
    }
}

module.exports = new CategoryController;