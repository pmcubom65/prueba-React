import React from 'react'

import { useNavigate } from 'react-router-dom';

import {Card} from 'react-bootstrap'

function Inicio() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Popular Titles</h1>
        

        <div className="cardClass">

        <Card >

    <Card.Body>
        <Card.Text>
        <a href="/series">Popular Series</a>
        </Card.Text>

    </Card.Body>
</Card>

<Card >

<Card.Body>
    <Card.Text>
    <a href="/movies">Popular Movies</a>
    </Card.Text>

</Card.Body>
</Card>

        </div>

     


        

      


    </div>
  )
}

export default Inicio;