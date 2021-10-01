const express = require('express')
const router = express.Router()

const postController = require('../controllers/PostController')

// router.get('/:slug', postController.show)
router.get('/create', postController.create)
router.get('/:slug', postController.show)
router.post('/handle-form-action', postController.handleFormAction)
router.get('/:id/edit', postController.getById)
router.post('/store', postController.store)
router.put('/:id', postController.update)
router.patch('/:id/restore', postController.restore)
router.delete('/:id', postController.delete)
router.delete('/:id/force', postController.forceDelete)

module.exports = router