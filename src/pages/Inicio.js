import React from 'react'

import CustomCard from '../components/CustomCard';

import {Card} from 'react-bootstrap'

function Inicio() {
  
  return (
    <div className="inicio">
   
           
    <div  className="cardClass">
     
        

        <div className="cardClass">

        <CustomCard>

    <Card.Body>
        <Card.Title>
        <a href="/series"><h1>Popular Series</h1></a>
        </Card.Title>

    </Card.Body>
</CustomCard>

<CustomCard>

<Card.Body>
    <Card.Title>
    <a href="/movies"><h1>Popular Movies</h1></a>
    </Card.Title>

</Card.Body>
</CustomCard>

        </div>
        </div>
     


        

      


    </div>
  )
}

export default Inicio;