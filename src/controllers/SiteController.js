const Post = require('../models/Post')
const { mutipleMongooseToObject } = require('../util/mongoose')
class PostController {
    // [GET] /
    index(req, res, next) {
       Post.find({})
       .then(post =>{ 
           res.render('home', {
               post: mutipleMongooseToObject(post)
           })
       })
    }
}

module.exports = new PostController;