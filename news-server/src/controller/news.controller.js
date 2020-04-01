const express = require('express')
const axios = require('axios')
const _ = require('lodash')

module.exports = {
    index: (req, res) => {
        if (null == req.query.q) {
            //IF query is not defined, get global news
            params = { q: 'global', ...req.query }
        } else {
            params = req.query
        }
        console.log(params)
        axios
            .get(
                `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}`,
                { params: params }
            )
            .then(response => {
                res.send({ query: req.params.q, data: response.data })
            })
            .catch(err => {
                res.json(err).status(500)
            })
    },
    topheadlines: (req, res) => {
        if (null == req.query.q) {
            //IF query is not defined, get global news
            params = { q: 'global', ...req.query }
        } else {
            params = req.query
        }
        console.log(params)
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.NEWS_API_KEY}`,
                { params: params }
            )
            .then(response => {
                res.send({ query: req.params.q, data: response.data })
            })
            .catch(err => {
                res.json(err).status(500)
            })
    },

    sources: (req, res) => {
        endpoint = `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`
        if (req.query.category) endpoint += `&category=${req.query.category}`
        axios
            .get(endpoint)
            .then(response => {
                res.json(response.data).status(200)
            })
            .catch(err => {
                res.json(err).status(500)
            })
    },
    sourcedetails: (req, res) => {
        axios
            .get(
                `https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_API_KEY}`
            )
            .then(response => {
                res.json(_.uniq(_.map(response.data.sources, req.query.q)))
                // res.json(response.data.sources)
            })
            .catch(err => {
                res.json(err).status(500)
            })
    }
}
