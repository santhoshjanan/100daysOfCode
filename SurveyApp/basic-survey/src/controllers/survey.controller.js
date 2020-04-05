const Survey = require('../models/survey.model');

module.exports = {
    index: (req, res) => {
        Survey.find()
            .then((data) => {
                res.json({ data });
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    create: (req, res) => {
        const data = new Survey(req.body);
        data.save()
            .then((item) => {
                res.json({
                    result: 'Survey saved',
                    data: item,
                });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
    },
};
