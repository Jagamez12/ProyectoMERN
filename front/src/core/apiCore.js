import { API } from '../config'

export const getPets =() => {
    return fetch(  
        `${API}/pets/mascotas`, { method: 'GET'}
    )
        .then(response => { 
            console.log(response)
            return response.json() // Aqui hubo un error - PENDIENTE !
        })
        .catch(err => console.log(err))
}