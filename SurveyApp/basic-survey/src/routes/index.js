const express = require('express')
const userRoutes = require('./users.routes')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        app: 'Survey App',
        version: '1.0',
        author: 'Santhosh Janardhanan',
        email: 'santhoshj at gmail dot com'
    })
})
router.use('/user', userRoutes)

module.exports = router
