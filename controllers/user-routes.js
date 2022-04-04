const router = require('express').Router();
const User = require('../models/User');


router.get('/user', (req, res) => {
res.render('signup')
});

router.get('/', (req, res) => {
  res.render('signup')
  });
  

// POST /api/users
router.post('/user', (req, res) => {
  console.log("posted successfully");
  User.create({
    username: req.body.username,
    password: req.body.password,
    usertype: 'doctor'
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