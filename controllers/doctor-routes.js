const router = require('express').Router();
// book a new appointment
const BookAppointment = require('../models/Booking');
const User = require('../models/User');
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

// router.get('/doctor/appointments', async (req, res) => {
//   res.render('doctor-appointments',);
// });

// router.get('/doctor/appointments', async (req, res) => {

//   BookAppointment.findAll({
//     where: {
//       doctorid: req.session.user_id
//     }
//   }).then(dbUserData => {
//     console.log("data book appointment", dbUserData.toJSON());
//     res.render('doctor-appointments',);

//   })
//     // .then(data => {
//     //   console.log("data book appointment", data.toJSON());
//     // });
// });

router.get('/doctor/appointments', async (req, res) => {
  try {
    const dbDocAptData = await BookAppointment.findAll({
      where: {
        doctorid: req.session.user_id
      }
    });
    console.log("dbDocAptData: ", dbDocAptData)

    const galleries = dbDocAptData.map((gallery) =>
      gallery.get({ plain: true })
    );
    console.log("render galleries: ", galleries)
    res.render('doctor-appointments', {galleries});
    console.log("after running the data render")

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/doctor/prescription', async (req, res) => {
  res.render('doctor-prescription', { appointments });
});

router.get('/doctor', async (req, res) => {
  res.render('doctor');
});


module.exports = router;
