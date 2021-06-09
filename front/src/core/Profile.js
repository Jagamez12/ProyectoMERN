import React from 'react'
import NavBar from '../layout/NavBar'
import { isAuthenticated, redirected } from './apiCore'
import './Profile.css'

const Profile = ()  => {

    const {user, token} = isAuthenticated()
    return (
        <>
        {redirected()}
        <NavBar/>
        <div className="contenedor">
            <div className="userpets">
                <h3>Aqui van las mascotas</h3>
            </div>
            <div className="profile">
                Aqui va el Perfil 
            </div>
        </div>
        </>
    )
}

export default Profile