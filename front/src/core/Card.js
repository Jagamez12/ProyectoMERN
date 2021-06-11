import React, { useState } from 'react'
import './Card.css'
import ShowImage from './ShowImage'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function Cards({pet}) {
    const [count, setCount] = useState(pet.count)
    const Example = (props) => {
        return (
          <div>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        );
      };
    
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
/*<div className = "card m-10 card-cont">
            <div>
                <h2>{pet.name}</h2>
                <ShowImage className = "img" item={pet} url="pets"/>
                <p> {pet.raza} </p>
                <p> {pet.especie} </p>
                <Link to = {`/pets/${pet._id}`}>
                    <button className = "btn btn-success">Ver Mas</button>
                </Link>
            </div>
        </div>*/