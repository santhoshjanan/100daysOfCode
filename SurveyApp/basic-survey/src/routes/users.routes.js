const express = require('express')
const { index, create, login } = require('../controllers/users.controller')
const router = express.Router()

router.get('/', index)
router.post('/', create)
router.post('/login', login)

module.exports = router
