import React, { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import { Link } from 'react-router-dom'
import {  createPet, getCategories, isAuthenticated } from './apiCore'


const AddPets = () => {
    const [values, setValues] = useState({
        name: '',
        edad: '',
        categories: [],
        especie: '',
        genero: '',
        raza: '',
        description: '',
        foto: '',
        loading: false,
        error: '',
        nameOwner: '',
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
        description,
        foto,
        loading,
        error,
        createdPet,
        nameOwner,
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
        console.log(value)
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const showError = () => (
        <div className ="alert alert-danger" style={{ display: error ? '' : 'none'}}>
            <h2>{error}</h2>
        </div>
    )
    const showSuccess = () => (
        <div className="alert alert-info"
        style={{ display: createdPet ? '' : 'none'}}> 
            <h2>{`the ${createdPet} was created`}</h2>
        </div>
    )
    const showLoading = () => 
        loading && (
            <div className = 'alert alert-success'>
                <h2>Loading.....</h2>
            </div>
        )
    const newPetsForm = () => (
        <form className='mb-3' onSubmit={clickSubmit}>
              <h4>Post Photo</h4>
              <div className='form-group'>
                <label className='btn btn-secondary'>
                  <input
                    onChange={handleChange('foto')}
                    type='file'
                    name='foto'
                    accept='image/*'
                  />
                </label>
              </div>
              <div className='form-group'>
                <label className='text-muted'>Name</label>
                <input
                  onChange={handleChange('name')}
                  type='text'
                  className='form-control'
                  value={name}
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Raza</label>
                <input
                  onChange={handleChange('raza')}
                  type='text'
                  className='form-control'
                  value={raza}
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Genero</label>
                <select onChange={handleChange('genero')}
                  type='text'
                  className='form-control'
                  >
                    <option value="">Seleccione un genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>especie</label>
                <select
                  onChange={handleChange('especie')}
                  type='text'
                  className='form-control'
                >
                  <option>Seleccionar Especie</option>
                  {categories &&
                    categories.map((c, i) => (
                      <option key={i} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className='form-group'>
                <label className='text-muted'>Edad</label>
                <input
                  onChange={handleChange('edad')}
                  type='number'
                  className='form-control'
                  value={edad}
                />
              </div>
              <div className='form-group'>
        <label className='text-muted'>Descripcion</label>
        <textarea
          onChange={handleChange('description')}
          cols = "50"
          rows = "5"
          className='form-control'
          value={description}
        />
      </div>
              <div className='form-group'>
                <label className='text-muted'>Propietario</label>
                <select className = 'form-control' 
                type = 'text' 
                onChange={handleChange('nameOwner')}>
                      <option >Seleccione el Propietario</option>
                      <option value={user.name}>{user.name}</option>
                </select>
              </div>        
              <button className='btn btn-outline-primary'>Create Product</button>
            </form>
    )
    const clickSubmit = event => {
        event.preventDefault()
        
        setValues({ ...values, error: '', loading: true })
        console.log(values)
        console.log(formData)
        createPet(user._id, token, formData).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error })
          } else {
            setValues({
              ...values,
              name: '',
              edad: '',
              foto: '',
              genero: '',
              nameOwner: '',
              raza: '',
              description: '',
              loading: false,
              createdPet: data.name
            })
          }
        })
      }
return(
    <>
        <NavBar/>
        <div className="container mt-5">
            <h2>Agregar una mascota</h2>
            {showLoading()}
            {showError()}
            {showSuccess()}
            {newPetsForm()}
        </div>
    </>
)
}
export default AddPets

