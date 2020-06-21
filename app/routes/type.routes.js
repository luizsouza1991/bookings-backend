const verifyAuth = require('./index')

module.exports = app => {
    const type = require('../controllers/type.controller');

    app.get('/types', type.index);
    app.post('/types/store', type.store);
    app.get('/types/:id/edit', type.edit);
    app.put('/types/:id/update', type.update);
    app.delete('/types/delete/:id', type.delete);
}