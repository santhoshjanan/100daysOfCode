const express = require('express')
const axios = require('axios')
const _ = require('lodash')

module.exports = {
    index: (req, res) => {
        console.log(
            `https://newsapi.org/v2/everything?q=${req.params.q}&apiKey=${process.env.NEWS_API_KEY}`
        )
        axios
            .get(
                `https://newsapi.org/v2/everything?q=${req.params.q}&apiKey=${process.env.NEWS_API_KEY}`
            )
            .then(response => {
                res.send({ query: req.params.q, data: response.data })
            })
            .catch(err => {
                res.json(err).status(500)
            })
    },

    sources: (req, res) => {
        console.log(
            `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`
        )
        axios
            .get(
                `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`
            )
            .then(response => {
                res.json(response.data).status(200)
            })
            .catch(err => {
                res.json(err).status(500)
            })
    }
}
