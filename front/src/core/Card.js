import React, { useState } from 'react'
import './Card.css'
import ShowImage from './ShowImage'

export default function Card({pet}) {
    const [count, setCount] = useState(pet.count)

    
    return (
        <div className = "card m-10 card-cont">
            <div>
                <h2>{pet.name}</h2>
                <ShowImage className = "img" item={pet} url="pets"/>
                <p> {pet.raza} </p>
                <p> {pet.especie} </p>
                <button className = "btn btn-success"></button>
            </div>
        </div>
    )
}
