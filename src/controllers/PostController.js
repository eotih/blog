const Post = require('../models/Post');
const { mongooseToObject, multipleMongooseToObject } = require('../util/mongoose');
class PostController {

    // [GET] /post/:slug
    find(req, res, next) {
        Post.find({})
            .then(post => {
                res.render('post/show', {
                    other: multipleMongooseToObject(post)
                });
            })
            .catch(next)
    }
    show(req, res, next) {
        Post.find({})
            .then(post => {
                res.render('post/show', {
                    other: multipleMongooseToObject(post)
                });
            })
            .catch(next)
        Post.findOne({ slug: req.params.slug })
            .then(post => {
                res.render('post/show', {
                    post: mongooseToObject(post)
                });
            })
            .catch(next)
    }
    // [GET] /
    create(req, res, next) {
        res.render('post/create')
    }
    //[POST] /post/store
    store(req, res, next) {
        const post = new Post(req.body)
        post
            .save()
            .then(() => { res.redirect('/') })
            .catch(next);
    }
}

module.exports = new PostController;