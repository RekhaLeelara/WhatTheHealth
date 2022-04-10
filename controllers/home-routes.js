const router = require('express').Router();
const User = require('../models/User');

// landing page
router.get('/', async (req, res) => {
  res.render('landing');
});

router.get('/about', (req, res) => {
  res.render('about')
});
  
module.exports = router;