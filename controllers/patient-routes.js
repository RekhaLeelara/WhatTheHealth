const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// harcoded for now, just to get things rolling
const appointments = [
  {
    id: 1,
    date: 'April 4, 2022',
    time: '10:20am',
    doctorName: 'Dr. Foo McBar',
    symptoms: 'cold feet',
    status: 'booked',
    waitTime: 5
  }
  
];

router.get('/patient/appointments', async (req, res) => {
    res.render('patient-appointments', {appointments});
  });


const prescriptions = [
    {
        drug: 'Tylenol 3',
        form: 'tablets',
        quantity: 60,
        dosage: '5mg',
        refills: 1,
        expiration: 'April 2, 2023',
        doctorName: 'Dr. Foo McBar',
        pharmacy: 'Main Square Pharmacy',
        pharmacyPhone: '416-345-1234',
        pharmacyFax: '647-895-5648',
        status: 'not received',   
        instructions: 'take before meals, twice daily'
    },
    {
        drug: 'Amoxicillin',
        form: 'tablets',
        quantity: 30,
        dosage: '15mg',
        refills: 0,
        expiration: 'June 1, 2022',
        doctorName: 'Dr. Foo McBar',
        pharmacy: 'Main Square Pharmacy',
        pharmacyPhone: '416-345-1234',
        pharmacyFax: '647-895-5648',
        status: 'processing',   
        instructions: 'once daily, after first meal'
    },
    {
        drug: 'Ritalin',
        form: 'tablets',
        quantity: 60,
        dosage: '5mg',
        refills: 2,
        expiration: 'April 2, 2023',
        doctorName: 'Dr. Foo McBar',
        pharmacy: 'Main Square Pharmacy',
        pharmacyPhone: '416-345-1234',
        pharmacyFax: '647-895-5648',
        status: 'filled (ready)',   
        instructions: 'take once daily'
    }
];
  
router.get('/patient/prescriptions', async (req, res) => {
    res.render('patient-prescriptions', {prescriptions});
});

router.get('/patient', async (req, res) => {
  res.render('patient', {prescriptions});
});
  
router.get('/patient/appointments/call/:roomID', async (req, res) => {
  // here: need to find out which waiting room id is available?
  // get room ID
  roomID = req.params.roomID
  res.render('waiting-room', {roomID: roomID});
});


// book a new appointment
const BookAppointment = require('../models/Booking');

// POST /api/users
router.post('book-appointment', (req, res) => {
  console.log("posted successfully");
  User.create({
    username: req.session.username,
    appointmentID: uuidv4(),
    doctorName: req.body.doctorName,
    date: req.body.date,
    time: req.body.time,
    symptoms: req.body.symptoms
  })
  .then(dbUserData => {


  });
});


module.exports = router;
