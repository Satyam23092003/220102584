// routes/shortUrlRoutes.js
const express = require('express');
const router = express.Router();
const shortUrlController = require("../controller/shortUrlController")

// POST /shorturls → create a new short URL
router.post('/shorturls', shortUrlController.createShortUrl);

module.exports = router;
