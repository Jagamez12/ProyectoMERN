import React, { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import { deletePet, isAuthenticated, redirected } from './apiCore'
import './Profile.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const Profile = ()  => {
    const [pets, setPets] = useState([])
    const {user} = isAuthenticated()
    
    const getMascota = (e) => {
        fetch(`http://localhost:4000/api/pets/mascotas`)
            .then(res => res.json())
            .then(data => {
                setPets(data)
                console.log(pets)
            })
    }
    
    
    const deleteIt = (id) => {
        deletePet(id)        
    }
    useEffect(() => {
        getMascota()
    }, [])
    return (
        <>
        {redirected()}
        <NavBar/>
        <div className="contenedor">
            <aside className = "profile-aside">
                <h4 className="profile-aside-tittle">Mis mascotas</h4>
                <hr className = "profile-aside-hr" width = "60%"/>
                {
                    
                    pets.map((pet, id) =>(
                        <div key = {id} >
                            {
                                pet.nameOwner === user.name && (
                                <div className="profile-aside-pet">
                                    <h5>{id}</h5>
                                    <img className = "profile-aside-pet-img" 
                                    src={`http://localhost:4000/api/pets/foto/${pet._id}`} alt={pets.name} />
                                    <h3 className="profile-aside-pet-name">{pet.name}</h3>
                                    <h3>{pet.estado}</h3>
                                    <Button></Button>
                                    <Button className = 'aside-pet-button' style={{backgroundColor: 'red', border: 'none'}} onClick = {() => {deleteIt(pet._id)}}>X</Button>
                                    <Link to = {`/pets/${pet._id}`}>
                                        <Button className = 'aside-pet-button'>Ver Mas</Button>
                                    </Link>
                                </div>
                                    
                                )
                            }
                            
                        </div>
                    ))
                }
            </aside>            
            <main className = "profile-main">
                <h4 className="profile-main-tittle">Mi Perfil</h4>
                <hr width = "60%"/>
                <div className="profile-main-image">
                    <div className="profile-main-image-replic"></div>
                </div>
                <div className="profile-main-info">
                    <h5>Nombre: {user.name}</h5>
                    <h5>Role: {user.role}</h5>
                    <h5>Email: {user.email}</h5>
                    
                </div>
            </main>
        </div>
        </>
    )
}

export default Profile

