const express = require('express')
const { verifyToken } = require('../middlewares/auth.middleware')
const { index, create, login } = require('../controllers/users.controller')
const router = express.Router()

router.get('/', verifyToken, index)
router.post('/', create)
router.post('/login', login)

module.exports = router
