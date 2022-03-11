const express = require('express')
const path = require('path')
const index = require('./routes/index')
const add_user = require('./routes/add-user')
const cadastro_concluido = require('./routes/cadastro_concluido')
const MongoConnectionFactory = require('../database/MongoConnectionFactory')

MongoConnectionFactory.getConnection()

const app = express()

app.use(express.urlencoded({ extended: true }))      
app.use(express.json())

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
app.use(cadastro_concluido)

module.exports = app

/*
mongoose.connection.once('open', ()=>{
    app.listen()
})
*/
