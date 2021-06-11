import React, { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import { Adoptar, isAuthenticated, read } from './apiCore'
import Card from './Card'


const Pets = (props) => {
    
    const {user, token} = isAuthenticated()
    const [pets, setPets] = useState({})
    const [error, setError] = useState(false)
    const [adopt, setAdopt] = useState({})
    const loadPets = petsId => {
        read(petsId)
            .then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setPets(data)
            }
        })
    }
    const adoptar = event => {
        //event.preventDefault()
        const data = {
            namePet: pets.name,
            edadPet: pets.edad,
            especie: pets.especie,
            genero: pets.genero,
            raza: pets.raza,
            nameUser: user.name,
            nameOwner: pets.nameOwner

        }
        Adoptar(user._id, token, data)


    }
    useEffect(() => {
        const petsId = props.match.params.petsId
        loadPets(petsId)
    }, [])

    return(
        <>
            <NavBar></NavBar>
            <div className = "container">
                {
                    pets &&
                    <>
                    <Card pet={pets}/>
                    <h4>{pets.name}</h4>
                    <h4>{pets.edad}</h4>
                    <h4>{pets.especie}</h4>
                    <h4>{pets.genero}</h4>
                    <h4>{pets.raza}</h4>
                    <h4>{pets.nameOwner}</h4>
                    <button onClick={() => {adoptar()}}>Adoptar</button>
                    </>
                    
                }
            </div>
        </>
    )
}

export default Pets