const express = require('express')
const router = express.Router()

const postController = require('../controllers/PostController')

// router.get('/:slug', postController.show)
router.get('/create', postController.create)
router.post('/store', postController.store)
router.get('/:slug', postController.show)

module.exports = router