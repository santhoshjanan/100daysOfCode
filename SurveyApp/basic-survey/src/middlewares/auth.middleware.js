const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken: (req, res, next) => {
        const bearerHeader = req.headers['authorization']

        if (typeof bearerHeader !== 'undefined') {
            req.token = bearerHeader.split(' ')[1]
            try {
                req.auth = jwt.verify(req.token, process.env.API_SECRET)
                next()
            } catch (err) {
                res.json(err).status(403)
            }
        } else {
            res.sendStatus(403)
        }
    }
}
