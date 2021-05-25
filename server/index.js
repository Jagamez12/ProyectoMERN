// Importaciones 
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-Parser')
const cors = require('cors')


// Use las librerias
const app = express()
require('dotenv').config()


// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

//database setup 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {console.log('Base de datos Encendida')})


// routes setup 
app.use('/api/category', require('./routes/category'))
app.use('/api/pets', require('./routes/pets'))
/*app.get('/', (req, res) => {
    res.send("El Servidor esta funcionando")
}) */




// Escuchando el Puerto 
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor Funcionando en el puerto ${port}`)
})