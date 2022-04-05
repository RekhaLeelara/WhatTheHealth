const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// harcoded for now, just to get things rolling
const appointments = [
  {
    availability: 'April 10, 2022',
    time: '10:00am',//How to get different time displayed in the column
    doctorName: 'Dr. Foo McBar',
    Specialty: 'Internal Medicine',
    Phone: '(416) 932-3784'
  },
  {
    availability: 'April 10, 2022',
    time: '10:00am',
    doctorName: 'Dr. Daniela Curry',
    Specialty: 'Cardiology',
    Phone: '(416) 381-3887'
  },
  {
    availability: 'April 11, 2022',
    time: '1:00pm',
    doctorName: 'Dr. Angelo Cook',
    Specialty: 'Physiotherapist',
    Phone: '(416) 723-6710'
  }
];

const appointments2 = [
  {
    availability: 'April 10, 2022',
    time: '10:00am',//How to get different time displayed in the column
    doctorName: 'Dr. Foo McBar',
    Specialty: 'Internal Medicine',
    Phone: '(416) 932-3784'
  },
  {
    availability: 'April 10, 2022',
    time: '10:00am',
    doctorName: 'Dr. Daniela Curry',
    Specialty: 'Cardiology',
    Phone: '(416) 381-3887'
  },
  {
    availability: 'April 11, 2022',
    time: '1:00pm',
    doctorName: 'Dr. Angelo Cook',
    Specialty: 'Physiotherapist',
    Phone: '(416) 723-6710'
  }
];

  // symptoms: 'cold feet',
  // status: 'booked',
  
//   INSERT INTO Doctor VALUES ('Dr. Foo ', ' Family Physician', '(416) 932-3784');
// INSERT INTO Doctor VALUES ('Dr. Daniela Curry', ' Cardiology ',  '(416) 381-3887');
// INSERT INTO Doctor VALUES ('Dr. Isai Roberts', ' Pediatric ', '(416) 779-3099');
// INSERT INTO Doctor VALUES ('Dr. Angelo Cook', ' Physiotherapist ', '(416) 723-6710');
// INSERT INTO Doctor VALUES ('Dr. Patrick Frost', ' Dermatologist ', '(416) 980-2382');
// INSERT INTO Doctor VALUES ('Dr. Oswaldo Salas', ' Nephrologist ', '(416) 779-5475');

router.get('/patient/bookAppointments', async (req, res) => {
    res.render('book-appointment', {appointments});
});

router.get('/patient/bookAppointments/time', async (req, res) => {
  // window.confirm("Your Appointment has been booked successfully!")
  // alert("Your Appointment has been booked successfully!");
  res.render('book-appointment', {appointments,appointments2});
  // alert("Your Appointment has been booked successfully!");
});

router.get('/patient/bookAppointments/book-appointment', async (req, res) => {
  res.render('book-appointment', {appointments});
});

// book a new appointment
const BookAppointment = require('../models/Booking');

// POST /api/users
// router.post('bookAppointments/book-appointment', (req, res) => {
//   console.log("posted successfully");
//   BookAppointment.create({
//     username: req.session.username,
//     appointmentID: uuidv4(),
//     doctorName: req.body.doctorName,
//     date: req.body.date,
//     time: req.body.time,
//     symptoms: req.body.symptoms
//   })
//   .then(dbUserData => {


//   });
// });

router.post('/patient/bookAppointments/book-appointment', (req, res) => {
  console.log("posted successfully");
  BookAppointment.create({
    // username: req.session.username,
    // appointmentID: uuidv4(),
    doctorName: req.body.doctorName,
    date: req.body.date,
    time: req.body.time,
    symptoms: req.body.symptoms
  })
  .then(dbUserData => {


  });
});


module.exports = router;
