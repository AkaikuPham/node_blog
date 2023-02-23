const express = require('express');
const newwController = require('../app/controllers/NewController');
const router = express.Router();

// newwController.index();

router.use('/', newwController.index);

module.exports = router;