const express = require('express');
const newController = require('../app/controllers/NewController');
const router = express.Router();

// newController.index();

router.get('/', newController.index);

module.exports = router;
