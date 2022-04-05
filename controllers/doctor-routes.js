const router = require('express').Router();

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

router.get('/doctor/appointments', async (req, res) => {
  res.render('doctor-appointments', {appointments});
});

router.get('/doctor', async (req, res) => {
  res.render('doctor');
});


module.exports = router;
