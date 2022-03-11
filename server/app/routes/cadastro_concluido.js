const { Router } = require('express')

const router = Router()

router.get('/cadastro_concluido', (request, response)=>{

    response.render('cadastro_concluido')
})

module.exports = router
