import React from 'react'

import { useNavigate } from 'react-router-dom';

import {Card} from 'react-bootstrap'

function Inicio() {
    const navigate = useNavigate();
  return (
    <div className="inicio">
   
           
    <div  className="cardClass">
     
        

        <div className="cardClass">

        <Card style={{margin: '2rem'}}>

    <Card.Body>
        <Card.Title>
        <a href="/series"><h1>Popular Series</h1></a>
        </Card.Title>

    </Card.Body>
</Card>

<Card style={{margin: '2rem'}}>

<Card.Body>
    <Card.Title>
    <a href="/movies"><h1>Popular Movies</h1></a>
    </Card.Title>

</Card.Body>
</Card>

        </div>
        </div>
     


        

      


    </div>
  )
}

export default Inicio;