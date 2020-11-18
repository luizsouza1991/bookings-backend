const { Booking } = require('../models');
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    Booking.findAll()
        .then((bookings) => {
            res.status(200).send({
                status: true,
                bookings: bookings
            })
        })
        .catch((error) => {
            res.status(500).send({
                status: false,
                msg: 'Error fetching bookings',
                error: error
            })
        })
}

exports.store = (req, res) => {
    Booking.create({
        date_start: req.body.date_start,
        date_finish: req.body.date_finish,
        status_id: req.body.status_id,
        product_id: req.body.product_id
    })
    .then((booking) => {
        res.status(200).send({
            status: true,
            booking: booking
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error creating booking',
            error: error
        })
    })
}

exports.edit = (req, res) => {
    Booking.findAll({
        where: {
            id: req.params.id
        }
    })
    .then((booking) => {
        res.status(200).send({
            status: true,
            booking: booking
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error fetching booking',
            error: error
        })
    })
}

exports.update = (req, res) => {
    Booking.update({
        date_start: req.body.date_start,
        date_finish: req.body.date_finish,
        status_id: req.body.status_id,
        product_id: req.body.product_id
    },
    {
        where: {
            id: req.params.id
        }
    })
}