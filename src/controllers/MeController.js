const Post = require('../models/Post')
const { mongooseToObject, multipleMongooseToObject } = require('../util/mongoose');


class MeController {

    // [GET] /me/stored/music
    storedMusic(req, res, next) {
        let postQuery = Post.find({})
        // [GET] /me/stored/music
        Promise.all([postQuery, Post.countDocumentsDeleted()])
            .then(([post, deletedCount]) =>
                res.render('me/stored-post', {
                    deletedCount,
                    post: multipleMongooseToObject(post)
                })
            ).catch(next)
    }
    // [GET] /me/trash/post
    trashMusic(req, res, next) {
        Post.findDeleted({})
            .then((post) => res.render('me/trash-post', {
                post: multipleMongooseToObject(post)
            }))
            .catch(next)
    }
}

module.exports = new MeController();