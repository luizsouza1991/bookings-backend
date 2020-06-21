const { User, Profile } = require('../models');
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    User.findAll({
        include: [
            {
                model: Profile,
                as: 'profiles',
            }
        ]
    })
    .then((users) => {
        res.status(200).send({
            status: true,
            users: users
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error listing users',
            error: error
        })
    })
}