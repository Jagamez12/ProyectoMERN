import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import NavBar from '../layout/NavBar'
import { Adoptar, deletePet, isAuthenticated, read } from './apiCore'
import Card from './Card'


const Pets = (props) => {
    
    const {user, token} = isAuthenticated()
    const [pets, setPets] = useState({})
    const [error, setError] = useState(false)
    const [adopt, setAdopt] = useState({
            namePet: '',
            edadPet: '',
            especie: '',
            genero: '',
            raza: '',
            nameUser: '',
            nameOwner: ''
    })
    const {
        namePet,
        edadPet,
        especie,
        genero,
        raza,
        nameUser,
        nameOwner} = adopt
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
        setAdopt({
            namePet: pets.name,
            edadPet: pets.edad,
            especie: pets.especie,
            genero: pets.genero,
            raza: pets.raza,
            nameUser: user.name,
            nameOwner: pets.nameOwner

        })
        console.log(adopt)
        Adoptar(user._id, token, adopt)


    
    }
    const deleteIt = () => {
        
        deletePet(pets._id)
        return <Redirect to ="/"/>
        
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
                    <h4>{user._id}</h4>
                    <h4>{pets.nameOwner}</h4>
                    <button onClick={() => {adoptar()}}>Adoptar</button>
                    <button onClick={() => deleteIt()}>Borrar</button>
                    </>
                    
                }
            </div>
        </>
    )
}

export default Pets