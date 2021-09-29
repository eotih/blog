const express = require('express')
const router = express.Router()

const siteController = require('../controllers/SiteController')

// router.get('/:slug', postController.show)
router.get('/', siteController.index)

module.exports = router