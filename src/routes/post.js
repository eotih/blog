const express = require('express')
const router = express.Router()

const postController = require('../controllers/PostController')

// router.get('/:slug', postController.show)
router.get('/create', postController.create)
router.get('/:slug', postController.show)
router.post('/store', postController.store)

module.exports = router