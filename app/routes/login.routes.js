// const verifyAuth = require('./index');

module.exports = app => {
    const login = require('../controllers/login.controller');

    app.post('/register', login.register);
}