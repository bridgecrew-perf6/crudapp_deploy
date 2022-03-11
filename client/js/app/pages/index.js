import { RequestService } from '../services/RequestService.js'

const tabela = document.querySelector('.tabela')

tabela.addEventListener('click', (event) => {

    const isBtnDelete = event.target.classList.contains('delete')

    if (isBtnDelete) {

        if (!confirm("Deseja apagar esta linha?")) return

        const id = event.target.dataset.id

        RequestService.delete(id)
            .then(location.reload())
            .catch(console.log)
    }
})






