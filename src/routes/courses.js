const express = require('express');
const courseController = require('../app/controllers/CourseController');
const router = express.Router();

router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

module.exports = router;
