const express = require('express');
const router = express.Router();
// Render Web
router.get('/', (req, res) => {
    res.render('main'); // main.ejs
});
module.exports = router;