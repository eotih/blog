const Post = require('../models/Post')
const { multipleMongooseToObject,mongooseToObject } = require('../util/mongoose')
class PostController {
    // [GET] /
    index(req, res, next) {
        Promise.all([Post.find(), Post.findOne().sort('-createdAt')])
        .then(([post, postDetails]) => {
            // res.json(multipleMongooseToObject(post))
            res.render('home', {
                other: mongooseToObject(postDetails),
                post: multipleMongooseToObject(post)
            });
        })
        .catch(next)
       
    }
}

module.exports = new PostController;