const  { Profile, User } = require('../models')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {

}

exports.register = (req, res) => {
    Profile.findAll({ where : { name: req.body.profile_name} })
    .then((profile) => {
        User.create({ name: req.body.name, email: req.body.email, password: req.body.password, profile_id: profile[0].id })
        .then((user) => {
            res.status(200).send({ status: true, user: user })
        })
    })
}

exports.logout = (req, res) => {

}