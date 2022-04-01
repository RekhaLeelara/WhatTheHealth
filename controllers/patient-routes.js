const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const appointments = [
  {
    date: 'April 4, 2022',
    time: '10:20am',
    doctorName: 'Dr. Nejad Ghaffar',
    symptoms: 'cold feet',
    checkedIn: false,
    cancel: 'inline button',
    waitTime: 5
  }
  
];

// Get all dishes
router.get('/', async (req, res) => {
  res.render('patient-appointments');
});



// TODO: Add a route called `/dish/:num` below
router.get('/dish/:num', async (req, res) => {
  let dish = req.params.num -1
  res.render('dish', dishes[dish]);
});
module.exports = router;
