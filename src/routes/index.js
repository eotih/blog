const siteRouter = require('./site')
const postRouter = require('./post')
const meRouter = require('./me')
const categoryRouter = require('./category')
const userRouter = require('./user')

function route(app) {

    app.use('/user', userRouter)
    app.use('/category', categoryRouter)
    app.use('/post', postRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}
module.exports = route;