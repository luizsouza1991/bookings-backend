const verifyAuth = require('./index');

module.exports = app => {
    const bookings = require('../controllers/booking.controller');

    app.get('/bookings', bookings.index);
}