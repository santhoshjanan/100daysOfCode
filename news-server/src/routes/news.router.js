const express = require('express')
const {
    index,
    sources,
    sourcecategories,
    sourcecountries,
    sourcedetails
} = require('../controller/news.controller')
const router = express.Router()

router.get('/sources', sources)
router.get('/sourcedetails', sourcedetails)

router.get('/', index)

module.exports = router
