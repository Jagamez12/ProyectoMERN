import React, { useState } from 'react'
import './Card.css'
import ShowImage from './ShowImage'

export default function Card({pet}) {
    const [count, setCount] = useState(pet.count)

    
    return (
        <div className = "card m-10 card-cont">
            <div>
                <ShowImage className = "img" item={pet} url="pets"/>
                <h2>{pet.name}</h2>
                <p> {pet.raza} </p>
                <p> {pet.especie} </p>
            </div>
        </div>
    )
}
