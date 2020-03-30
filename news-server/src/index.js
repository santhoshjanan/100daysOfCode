const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const app = express()
require('dotenv').config()

const indexRouter = require('./routes/index')
const newsRouter = require('./routes/news.router')

app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000
    })
)

app.use(
    compression({
        level: 9
    })
)
// Middleware
// Using helmet per best practice: https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet())
// tslint:disable-next-line:max-line-length
// Using gzip compression per best practice: https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression

app.use(function(req, res, next) {
    res.header('Access-Control-Max-Age', '300')
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        '*,content-type,users_id,access_token'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )
    if ('OPTIONS' == req.method) {
        res.sendStatus(200)
    } else {
        next()
    }
})

app.use('/', indexRouter)
app.use('/news', newsRouter)
app.listen(process.env.PORT || 3000, () =>
    console.log(`News Aggregator listening on port ${process.env.PORT}!`)
)
