const express = require('express');
const userRoutes = require('./users.routes');
const surveyRoutes = require('./survey.routes');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        app: 'Survey App',
        version: '1.0',
        author: 'Santhosh Janardhanan',
        email: 'santhoshj at gmail dot com',
    });
});
router.use('/user', userRoutes);
router.use('/survey', surveyRoutes);

module.exports = router;
