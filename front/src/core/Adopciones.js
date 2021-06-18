import React, { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import './Adopciones.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { isAuthenticated } from './apiCore'

const Adopciones = () => {


    const [adopciones, setAdopciones] = useState([])
    const {user} = isAuthenticated()
    const getPeticiones = () => {
        fetch(`http://localhost:4000/api/adopted/adopted`, {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setAdopciones(data)
            })

    }
    const deletePeticion = (id) => {
        fetch(`http://localhost:4000/api/adopted/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            
    }
    const aceptarPeticion = (id, idx) => {
        fetch(`http://localhost:4000/api/pets/deletePet/${idx}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        deletePeticion(id)
    }
    useEffect(() => {
        getPeticiones()
    }, [])
    return (
        <>
        <NavBar/>
        <div className="container2">
            <div className="adop-peticiones-propias">
                <h3>Mis Peticiones</h3>
                <hr width='60%'/>
                {
                    adopciones.map((adopt, idx) => (
                        <div key = {idx}>
                            {
                                adopt.nameUser === user.name &&(
                                    <Card body className="text-center">
                                        <CardTitle tag="h5">{adopt.namePet}</CardTitle>
                                        <CardText>Pedido por: {adopt.nameUser}, Dueño: {adopt.nameOwner}</CardText>
                                        
                                        <Button onClick={()=> deletePeticion(adopt._id)} color = "danger">Declinar</Button>
                                    </Card>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <div className="adop-peticiones-otras">
                <h3>Administrar Peticiones</h3>
                <hr width='60%'/>
                {
                    adopciones.map((adopt, idx) => (
                        <div key = {idx}>
                            {
                                adopt.nameOwner === user.name &&(
                                    <Card body className="text-center">
                                        <CardTitle tag="h5">{adopt.namePet}</CardTitle>
                                        <CardText>Pedido por: {adopt.nameUser}, Dueño: {adopt.nameOwner}</CardText>
                                        <Button onClick={()=> aceptarPeticion(adopt._id, adopt.idPet)}>Aceptar</Button>
                                        <Button onClick={()=> deletePeticion(adopt._id)} color = "danger">Rechazar</Button>
                                    </Card>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Adopciones