require('dotenv/config')

const express = require('express')
const path = require('path')
const index = require('./routes/index')
const add_user = require('./routes/add-user')
const MongoConnectionFactory = require('../database/MongoConnectionFactory')
//const cors = require('cors')

MongoConnectionFactory.getConnection()

const app = express()

app.use(express.urlencoded({ extended: true }))      
app.use(express.json())
//app.use(cors())

    /* set view engine */
app.set('view engine', 'ejs')                           //npm install ejs --save
//app.set('view engine', 'pug')                         //npm install pug --save

    /* load views */
app.set('views', path.join(__dirname, '../../client/', 'views'))

    /* load assets */
app.use(express.static(path.join(__dirname, '../../client/')))
//app.use('/css', express.static(path.resolve(__dirname, '../../client/assets/img')))

    /* load js */
//app.use('/css', express.static(path.resolve(__dirname, '../../client/js')))

    /* Rotas (talvez seja melhor usar o 'Consign') */
app.use(index)
app.use(add_user)

module.exports = app

/*
mongoose.connection.once('open', ()=>{
    app.listen()
})
*/
