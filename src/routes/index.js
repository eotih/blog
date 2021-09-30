const siteRouter = require('./site')
const postRouter = require('./post')
const meRouter = require('./me')

function route(app) {

    app.use('/post', postRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}
module.exports = route;