import React from 'react'

import CustomCard from '../components/CustomCard';
import HeaderSecundario from '../components/HeaderSecundario';

import {Card} from 'react-bootstrap'

function Inicio() {
  
  return (
    <div>
    <HeaderSecundario titulo={'Popular Titles'}/>
   
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
    </div>
  )
}

export default Inicio;