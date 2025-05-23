// routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/', authorController.createAuthor);

module.exports = router;
