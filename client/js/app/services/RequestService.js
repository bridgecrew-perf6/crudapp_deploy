export const RequestService = {

    update(id, data) {

        const options = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                id: id,
                name: data.name,
                email: data.email,
                gender: data.gender,
                status: data.status
            })
        }

        return fetch('http://localhost:3000/add-user.html', options)
            .then(response =>

                response.ok ? Promise.resolve(response.body) : Promise.reject(response.statusText)
            )
    },

    delete(id) {

        const options = {

            method: 'DELETE'
        }

        return fetch(`http://localhost:3000/${id}`, options)
            .then(response =>
                response.ok ? Promise.resolve(response.body) : Promise.reject(response.statusText)
            )
    }
}