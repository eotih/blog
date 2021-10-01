const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/stored', UserController.show)
router.get('/create', UserController.create)
router.post('/store', UserController.store)

module.exports = router