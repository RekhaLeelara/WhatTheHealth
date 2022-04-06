const User = require('./User');
const Booking = require('./Booking');


// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

Booking.belongsTo(User, {
  foreignKey: 'doctorid',
});

module.exports = { User, Booking};
