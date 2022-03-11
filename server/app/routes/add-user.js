const { Router } = require('express')
const PessoaController = require('../../controllers/PessoaController')

const router = Router()

// router.get('/add-user.html', (request, response)=>{

//     response.render('add-user', {user: ''})
// })

router.get('/add-user.html', PessoaController.getPessoa)        //Pode haver query string ou não

router.post('/add-user.html', PessoaController.addPessoa)

router.put('/add-user.html', PessoaController.updatePessoa)     //Haverá query string

// router.put('/add-user.html/:id', (req, res)=>{
//     console.log(req.body)
// })

module.exports = router
