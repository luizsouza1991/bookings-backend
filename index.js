require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Sistema de Reservas')
})
  
require('./app/routes/login.routes')(app)
require('./app/routes/type.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/product.routes')(app)
require('./app/routes/bookings.routes')(app)

app.listen(3000, () => {
    console.log('Está funcionando');
})