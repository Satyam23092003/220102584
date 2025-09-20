const express = require("express");
const { redirectToOriginal } = require("../controller/reDirectController");
const router = express.Router();




// New
router.get('/:shortcode', redirectToOriginal);


module.exports = router;
