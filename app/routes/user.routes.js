const verifyAuth = require('./index')

module.exports = app => {
    const user = require('../controllers/user.controller')

    app.get('/users', user.index);
}