const router = require('express').Router();
const User = require('../models/User');


router.get('/user', (req, res) => {
res.render('all')
});

router.get('/', (req, res) => {
  res.render('all')
  });
  

// POST /api/users
router.post('/user', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.username = dbUserData.username;
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
  
      res.json(dbUserData);
    });
  });
});

module.exports = router;