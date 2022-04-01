const router = require('express').Router();

// harcoded for now, just to get things rolling
const appointments = [
  {
    date: 'April 4, 2022',
    time: '10:20am',
    doctorName: 'Dr. Nejad Ghaffar',
    symptoms: 'cold feet',
    status: 'booked',
    waitTime: 5
  }
  
];

router.get('/patient/appointments', async (req, res) => {
    res.render('patient-appointments', {appointments});
  });

module.exports = router;
