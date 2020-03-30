const express = require('express')
const { index, sources } = require('../controller/news.controller')
const router = express.Router()

router.get('/sources', sources)
router.get('/:q', index)

module.exports = router
