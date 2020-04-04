const express = require('express')
const { verifyToken } = require('../middlewares/auth.middleware')
const {
    index,
    create,
    login,
    me,
    updateProfile
} = require('../controllers/users.controller')
const router = express.Router()

router.get('/', verifyToken, index)
router.get('/me', verifyToken, me)
router.patch('/me', verifyToken, updateProfile)
router.post('/', create)
router.post('/login', login)

module.exports = router
