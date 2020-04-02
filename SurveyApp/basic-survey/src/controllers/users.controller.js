const express = require('express')
const axios = require('axios')
const passwordHash = require('password-hash')

const User = require('../models/user.model')

module.exports = {
    index: (req, res) => {
        User.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    create: (req, res) => {
        const data = new User({
            name: req.body.name,
            email: req.body.email,
            password: passwordHash.generate(req.body.password)
        })
        data.save()
            .then(item => {
                res.json({
                    result: 'User saved',
                    data: item
                })
            })
            .catch(err => {
                res.status(400).json({ err })
            })
    },
    login: (req, res) => {
        User.findOne({
            email: req.body.email
        })
            .then(data => {
                res.json({
                    authenticated: passwordHash.verify(
                        req.body.password,
                        data.password
                    ),
                    data
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}
