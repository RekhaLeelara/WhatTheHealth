const router = require('express').Router();

const doctor = require('./doctor-routes');
const patient = require('./patient-routes.js');

router.use('/doctor', doctor);
router.use('/patient', patient);

module.exports = router;
