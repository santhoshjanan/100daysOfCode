const express = require('express')
const {
    index,
    sources,
    sourcedetails,
    topheadlines
} = require('../controller/news.controller')
const router = express.Router()

router.get('/sources', sources)
router.get('/sourcedetails', sourcedetails)
router.get('/topheadlines', topheadlines)

router.get('/', index)

module.exports = router
