import React, { useEffect, useState } from 'react'
//import { API } from '../config'
import NavBar from '../layout/NavBar'
// import { getPets } from './apiCore'
import Card from './Card'

const Home = () => {

    const [pets, setPets] = useState([])
   
    const getMascota = (e) => {
        fetch(`http://localhost:4000/api/pets/mascotas`)
            .then(res => res.json())
            .then(data => {
                setPets(data)
                console.log(pets)
            })
        
        
    }
    
    

    useEffect(() =>{
        getMascota()    
    }, [])
    
    
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                
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