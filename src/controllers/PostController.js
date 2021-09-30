const Post = require('../models/Post');
const { mongooseToObject, multipleMongooseToObject } = require('../util/mongoose');
class PostController {

    // [GET] /post/:slug
    show(req, res, next) {
        // dùng Promise.all để gộp 2 chức năng lại
        Promise.all([Post.find(), Post.findOne({ slug: req.params.slug })])
            .then(([post, postDetails]) => {
                res.render('post/show', {
                    post: mongooseToObject(postDetails),
                    other: multipleMongooseToObject(post).slice(0, 4)
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
    // [GET] /post/:id/edit
    getById(req, res, next) {
        Post.findById(req.params.id)
            .then(post => res.render('post/edit', {
                post: mongooseToObject(post)
            }))
            .catch(next);
    }
    //[PUT] /post/:id
    update(req, res, next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/post'))
            .catch(next);
    }
}

module.exports = new PostController;