import { RequestService } from '../services/RequestService.js'

const url = new URL(window.location)
const id = url.searchParams.get('id')
//const route = window.location.pathname
//if (!route === '/add-user.html/') 

if (id) {

    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', function (event) {

        event.preventDefault()

        const data = new FormData(event.target)
        const pessoaAtualizada = Object.fromEntries(data.entries())

        RequestService.update(id, pessoaAtualizada)
            //.then(window.location.href = '../cadastro_concluido')
            .then(window.location.href = './')
    })
}



