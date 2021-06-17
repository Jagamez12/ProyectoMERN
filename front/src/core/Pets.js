import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import NavBar from '../layout/NavBar'
import { Adoptar, deletePet, isAuthenticated, read } from './apiCore'
import './Pets.css'


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
            <div>
            {console.log(pets)}
                {
                    pets &&
                    <>
                    <div className = "container container-pet">
                        <img className="foto-pet" src={`http://localhost:4000/api/pets/foto/${pets._id}`} 
                        alt={pets.name}/>
                        <div className="information-head">
                            <h2 className="information-head-title">{pets.name}</h2>
                            <h3 className="information-head-subtitle">{pets.raza}</h3>
                        </div>
                        <div className="information-left">
                        <div>
                            <p className="title-description">Descripción:</p>
                            <span className="title-description">{pets.description}</span>
                        </div>
                        </div>
                        <div className="information-right">
                            <p className="title-description">Edad: {pets.edad}</p>
                            <p className="title-description">Genero: {pets.genero}</p>
                            <p className="title-description">Nombre del dueño: {pets.nameOwner}</p>
                            <p className="title-description">Estado: {pets.estado}</p>
                        </div>
                    </div>
                    </>
                    
                }
            </div>
        </>
    )
}

export default Pets