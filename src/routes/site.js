const express = require('express');
const siteController = require('../app/controllers/SiteController');
const router = express.Router();

// newwController.index();

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
