const express = require('express')
const router = express.Router()

const meController = require('../controllers/MeController')

router.get('/stored/post', meController.storedMusic)
router.get('/trash/post', meController.trashMusic)

module.exports = router