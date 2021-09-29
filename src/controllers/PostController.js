const Post = require('../models/Post')

class PostController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('post/show', { Post: mongooseToObject(course) });
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