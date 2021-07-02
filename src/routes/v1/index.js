const express = require('express');
const surveys = require('./survey.route');

const router = express.Router();

router.use('/surveys', surveys);

module.exports = router;