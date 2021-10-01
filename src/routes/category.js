const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/CategoryController')

router.get('/stored/category', categoryController.storedMusic)
router.get('/create', categoryController.create)
router.post('/store', categoryController.store)
// router.get('/trash/category', categoryController.trashMusic)

module.exports = router