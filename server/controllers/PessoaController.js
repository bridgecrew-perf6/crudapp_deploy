const Pessoa = require('../database/models/Pessoa')

const PessoaController = {

    addPessoa(request, response) {

        const { name, email, gender, status } = request.body
        /*
        const pessoa = new Pessoa({name, email, gender, status})

        pessoa.save(pessoa)
            .then(res => response.send(res))
            .catch(err => response.status(400).send(err))
        */

        //await pessoa.findOne({ username: name}).exec()

        Pessoa.create({ name, email, gender, status })            //Pode-se passar o 'request.body' direto tbm
            .then(response.status(200).redirect('/'))
            .catch(err => response.status(400).send(err))
    },

    getAllPessoas(request, response) {

        Pessoa.find()
            //.then(res => response.json(res))
            .then(res => response.render('index', { users: res }))
            .catch(err => response.status(400).send(err))
    },

    getPessoa(request, response) {

        const id = request.query.id

        if (id) {

            //Pessoa.findById(id)
            Pessoa.findOne({ _id: id })
                // .then(res => response.json(res))
                .then(res => response.render('add-user', { user: res }))
                .catch(err => response.status(400).send(err))
        } else {

            //response.send('Você está na página inicial')
            response.render('add-user', { user: '' })
        }
    },

    updatePessoa(request, response) {

        //const { id } = request.params
        //const id = request.query.id
        const { id, name, email, gender, status } = request.body

        Pessoa.findByIdAndUpdate({ _id: id }, { name, email, gender, status })
            //.then(res => console.log(res))
            .catch(response.status(204).json({ 'message': 'ID not found' }))

        // Pessoa.findOne({ _id: id }) 
        //     .then(pessoa => {           //talvez vc queira usar await/async
        //
        //         // (...) alterações
        //         pessoa.save()
        //     })   
    },

    deletePessoa(request, response) {

        const { id } = request.params

        Pessoa.findByIdAndDelete(id)
            .then(res => response.json(res))
            .catch(err => response.status(400).send(err))
    }
}

module.exports = PessoaController