import { RequestService } from '../services/RequestService.js'

const tabela = document.querySelector('.tabela')

console.log(RequestService.location)

tabela.addEventListener('click', (event) => {

    const isBtnDelete = event.target.classList.contains('delete')

    if (isBtnDelete) {

        if (!confirm("Deseja apagar esta linha?")) return

        const id = event.target.dataset.id

        RequestService.delete(id)            
            .then(() => { event.target.closest('tr').remove() })    //.then(location.reload())
            .catch(console.log)
    }
})






