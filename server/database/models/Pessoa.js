const { Schema, SchemaTypes, model } = require('mongoose')

const pessoaSchema = new Schema({

    name:{
        type: SchemaTypes.String,
        required: true
    },

    email:{
        type: SchemaTypes.String,
        required: true,
        unique: true
    },

    gender:{
        type: SchemaTypes.String,
        required: true,
    },

    status:{
        type: SchemaTypes.String,
        required: true,
        default: 'Active'
    }
})

module.exports = model('Pessoa', pessoaSchema)

//Mongoose automatically looks for the plural, lowercased version of your model name
