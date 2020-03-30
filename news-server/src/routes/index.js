const express = require('express')
const newsRouter = require('./news.router')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        app: 'News Aggregator',
        version: '1.0',
        author: 'Santhosh Janardhanan',
        email: 'santhoshj at gmail dot com'
    })
})

router.use('/news', newsRouter)
module.exports = router
