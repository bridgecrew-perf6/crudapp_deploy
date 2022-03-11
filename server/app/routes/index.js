const { Router } = require('express')
const PessoaController = require('../../controllers/PessoaController')

const router = Router()

router.get('/', PessoaController.getAllPessoas)

/* Para HTML ao invés de ejs

router.get('/', (request, response) => {

    response.sendFile('index.html',
        { root: path.join(__dirname, '../../../client/', 'views') }
    )
})
*/

router.delete('/:id', PessoaController.deletePessoa)

module.exports = router
