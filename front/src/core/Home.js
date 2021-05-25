import React, { useEffect, useState } from 'react'
import { API } from '../config'
import NavBar from '../layout/NavBar'
// import { getPets } from './apiCore'
import Card from './Card'

const Home = () => {

    const [pets, setPets] = useState([])
    // const [error, setError] = useState(false)

    /*const loadPets = () => {
        getPets().then(data => {
            setPets(data)
        })*/
    const getMascota = () => {
        fetch(`http://localhost:4000/api/pets/mascotas`)
            .then(res => res.json())
            .then(data => {
                setPets(data)
                console.log(pets)
            })
        
    }
    // Otro Cambio
    //getMascota()
    const componentDidMount = () => {
        getMascota()
    }

    useEffect(() =>{
        componentDidMount()
    })
    
    //useEffect(() => {
    //    getMascota()
    //})
    // onClick={() => componentDidMount()}
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div>Esto es solo una prueba
                    <button >Este boton es una prueba</button>
                </div>
                <div className="row">
                    {pets.map((pet, i) => (
                        <div key = {i} className="col-lg-4 col-md-6 col-sm-6" >
                            <Card pet={pet} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home