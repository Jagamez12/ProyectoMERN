import React, { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import { Link } from 'react-router-dom'
import {  getCategories, isAuthenticated } from './apiCore'


const AddPets = () => {
    const [values, setValues] = useState({
        name: '',
        edad: '',
        categories: [],
        especie: '',
        genero: '',
        raza: '',
        foto: '',
        loading: false,
        error: '',
        createdPet: '',
        redirectToProfile: false,
        formData: ''
    })
    const { user, token } = isAuthenticated()
    const {
        name,
        edad,
        categories,
        especie,
        genero,
        raza,
        foto,
        loading,
        error,
        createdPet,
        redirectToProfile,
        formData
    } = values

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, categories: data, formData: new FormData() })
            }
        })
    }
    useEffect(()=> {
        setValues({...values, formData: new FormData()})
        init()
    }, [])


    const handleChange = name => e => {
        const value = name === 'foto' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const showError = () => (
        <div className ="alert alert-danger" style={{ display: createdPet ? '' : 'none'}}>
            <h2></h2>
        </div>
    )
return(
    <>
        <NavBar/>
        <h1>Hola mundo</h1>
    </>
)
}
export default AddPets