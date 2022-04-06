const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { User } = require('../models');

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

router.get('/patient/bookAppointments', async (req, res) => {
    res.render('book-appointment', {appointments});
});

// router.get('/patient/bookAppointments/book-appointment', async (req, res) => {
//   res.render('book-appointment', {appointments});
// });

// book a new appointment
const BookAppointment = require('../models/Booking');

router.post('/patient/book-appointment', (req, res) => {
  console.log("req.session.user_id", req.session.user_id);
  User.findOne({
    where: {
      username: req.body.doctorName
    }
  }).then(dbUserData => {
      console.log("querying the doctor name", dbUserData);
      BookAppointment.create({
        // username: req.session.username,
        username: req.session.username,
        appointmentid: uuidv4(),
        doctorName: req.body.doctorName,
        date: req.body.date,
        time: req.body.time,
        symptoms: req.body.symptoms,
        patientid: req.session.user_id,
        doctorid: dbUserData.id,
        status: 'Booked'
      })
      .then(data => {
        console.log("data book appointment", data.toJSON());
      });
  });
  
});


module.exports = router;
