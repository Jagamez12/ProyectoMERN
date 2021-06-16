import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import NavBar from '../layout/NavBar'
import { Adoptar, deletePet, isAuthenticated, read } from './apiCore'
import './Pets.css '


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
        setAdopt({
            namePet: '',
            edadPet: '',
            especie: '',
            genero: '',
            raza: '',
            nameUser: '',
            nameOwner: ''

        })

    
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
            <div className = "container" style={{
        backgroundColor: 'white', margin: 'auto'}}>
                {
                    pets &&
                    <>
                    <div className = "Arriba">
                        <img src={`http://localhost:4000/api/pets/foto/${pets._id}`} 
                        height = "300px"
                        width = "300px"
                        style = {{borderRadius: '50%', marginRight: '60px'}}
                        alt={pets.name} className="imagenProfile"/>
                        <h1 style={{ display: 'inline'}}>{pets.name}</h1>
                    </div>
                    </>
                    
                }
            </div>
        </>
    )
}

export default Pets