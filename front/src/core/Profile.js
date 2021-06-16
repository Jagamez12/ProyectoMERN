import React, { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import { isAuthenticated, redirected } from './apiCore'
import Cards from './Card'
import './Profile.css'

const Profile = ()  => {
    const [pets, setPets] = useState([])
    const {user, token} = isAuthenticated()

    const getMascota = (e) => {
        fetch(`http://localhost:4000/api/pets/mascotas`)
            .then(res => res.json())
            .then(data => {
                setPets(data)
                console.log(pets)
            })
    }
    useEffect(() => {
        getMascota()
    }, [])
    return (
        <>
        {redirected()}
        <NavBar/>
        <div className="contenedor">
            <div className="userpets">
                <h3>Mis Mascotas</h3>
                {
                    pets.map((pet, id) => {
                        if(pets.nameOwner === user.name)(
                            <div>
                                <Cards pet={pet}/>
                            </div>
                        )
                    })
                }

            </div>
            <div className="profile">
                Aqui va el Perfil 
            </div>
        </div>
        </>
    )
}

export default Profile