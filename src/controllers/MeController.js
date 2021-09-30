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
    // [GET] /me/trash/music
    trashMusic(req, res, next) {
        Post.findDeleted({})
            .then((courses) => res.render('me/trash-music', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new MeController();