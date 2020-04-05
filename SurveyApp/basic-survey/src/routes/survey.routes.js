const express = require('express');
const { verifyToken } = require('../middlewares/auth.middleware');
const { index, create } = require('../controllers/survey.controller');

const router = express.Router();

router.get('/', verifyToken, index);
router.post('/', verifyToken, create);

module.exports = router;
