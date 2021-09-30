const Post = require('../models/Post')
const { multipleMongooseToObject } = require('../util/mongoose')
class PostController {
    // [GET] /
    index(req, res, next) {
       Post.find({})
       .then(post =>{ 
           res.render('home', {
               post: multipleMongooseToObject(post)
           })
       })
    }
}

module.exports = new PostController;