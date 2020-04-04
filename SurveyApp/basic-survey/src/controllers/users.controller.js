const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
    index: (req, res) => {
        User.find()
            .then(data => {
                res.json({ data, auth: req.auth })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    create: (req, res) => {
        const data = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
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
                console.log(data)
                authenticated = bcrypt.compareSync(
                    req.body.password,
                    data.password
                )

                jwt.sign(
                    { data },
                    process.env.API_SECRET,
                    { expiresIn: '1h' },
                    function(err, token) {
                        res.json({
                            token,
                            data
                        })
                    }
                )
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
}
