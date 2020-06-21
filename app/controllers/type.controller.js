const { Type } = require('../models');
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    Type.findAll({
        order: [
            ['name', 'ASC']
        ]
    })
    .then((types) => {
        res.status(200).send({
            status: true,
            types: types
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error fetching product types',
            error: error
        })
    });
}

exports.store = (req, res) => {
    Type.create({
        name: req.body.name,
        description: req.body.description
    })
    .then((type) => {
        res.status(200).send({
            status: true,
            type: type
        });
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error trying to save product type',
            error: error
        })
    });
}

exports.edit = (req, res) => {
    Type.findAll({
        where: {
            id: req.params.id
        }
    })
    .then((type) => {
        res.status(200).send({
            status: true,
            type: type[0]
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error fetching product type data',
            error: error
        })
    });
}

exports.update = (req, res) => {
    Type.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    })
    .then((type) => {
        res.status(200).send({
            status: true,
            msg: 'Type successfully updated',
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error updating type',
            error: error
        });
    });
}

exports.delete = (req, res) => {
    Type.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.status(200).send({
            status: true,
            msg: 'Successfully deleted type'
        })
    })
    .catch((error) => {
        res.status(500).send({
            status: false,
            msg: 'Error deleting the type',
            error: error
        })
    });
}