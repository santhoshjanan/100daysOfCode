const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
    index: async (req, res) => {
        await User.find()
            .then((data) => {
                res.json({ data });
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    me: async (req, res) => {
        await User.findOne(req.auth.data)
            .then((data) => {
                res.json({ me: data });
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    updateProfile: async (req, res) => {
        await User.findOne(req.auth.data)
            .then((data) => {
                if (req.body.name) data.name = req.body.name;
                if (req.body.email) data.email = req.body.email;
                if (req.body.password) data.password = req.body.password;
                data.save()
                    .then((item) => {
                        res.status(201).json({ me: item });
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            })
            .catch((err) => {
                res.sendStatus(400);
            });
    },
    create: async (req, res) => {
        const data = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        await data
            .save()
            .then((item) => {
                res.json({
                    result: 'User saved',
                    data: item,
                });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    },
    login: async (req, res) => {
        await User.findOne({
            email: req.body.email,
        })
            .then((data) => {
                authenticated = bcrypt.compareSync(
                    req.body.password,
                    data.password
                );

                if (authenticated) {
                    jwt.sign(
                        { data },
                        process.env.API_SECRET,
                        { expiresIn: '1h' },
                        function (err, token) {
                            res.json({
                                token,
                                data,
                            });
                        }
                    );
                } else {
                    res.sendStatus(403);
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};
