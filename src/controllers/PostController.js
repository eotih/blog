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
    //[DELETE] /post/:id/
    delete(req, res, next) {
        Post.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //[PATCH] /post/:id/restore
    restore(req, res, next) {
        Post.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //[DELETE] /post/:id/force
    forceDelete(req, res, next) {
        Post.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //[POST] /courses/handle-form-action
    handleFormAction(req, res, next) {
        console.log(req.body.action)
        switch (req.body.action) {
            case 'delete':
                Post.delete({ _id: { $in: req.body.postIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Post.restore({ _id: { $in: req.body.postIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' })
        }
    }
}

module.exports = new PostController;