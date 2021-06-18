import React, { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function Cards({pet}) {
    const [count, setCount] = useState(pet.count)
    
    return (
        <div>
            <Card>
            <CardImg top width="100%" height="180px" src={`http://localhost:4000/api/pets/foto/${pet._id}`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{pet.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{pet.genero}</CardSubtitle>
                <CardText>{pet.description}</CardText>
                <Link to = {`/pets/${pet._id}`}>

                <Button>Ver Mas</Button>
                </Link>
              </CardBody>
            </Card>
          </div>
    )
}
