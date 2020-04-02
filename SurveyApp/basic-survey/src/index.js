const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const indexRouter = require('./routes/index')
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json())
app.use(cookieParser())

app.use(
    compression({
        level: 9
    })
)
// Middleware
// Using helmet per best practice: https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet())
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

app.listen(process.env.PORT || 3000, () =>
    console.log(`Survey App listening on port ${process.env.PORT}!`)
)
