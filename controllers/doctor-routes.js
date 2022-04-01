const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const appointments = [
  {
    date: 'April 4, 2022',
    time: '10:20am',
    patientName: 'Michael Palumbo',
    symptoms: 'cold feet',
    status: 'booked',
    waitingRoom: false
  },
  {
    date: 'April 4, 2022',
    time: '10:35am',
    patientName: 'Goofball McGee',
    symptoms: 'puffy shirt',
    status: 'booked',
    waitingRoom: true
  }
  
];

// Get all dishes
router.get('/doctor/appointments', async (req, res) => {
  res.render('doctor-appointments', {appointments});
});



// // TODO: Add a route called `/dish/:num` below
// router.get('/dish/:num', async (req, res) => {
//   let dish = req.params.num -1
//   res.render('dish', dishes[dish]);
// });
// module.exports = router;
