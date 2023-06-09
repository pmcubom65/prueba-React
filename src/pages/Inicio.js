import React from 'react'

import CustomCard from '../components/CustomCard';
import HeaderSecundario from '../components/HeaderSecundario';

import {Card} from 'react-bootstrap';

import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';

function Inicio() {

  const {fallBackSrc}=useContext(DataContext);
  
  return (
    <div>
    <HeaderSecundario titulo={'Popular Titles'}/>
   
    <div className="inicio">
  
   
           
    <div  className="cardClass">
     
        

        <div className="cardClass">

        <CustomCard inicio={true} ruta={"/series"}>

    <Card.Body>
        <Card.Title>
        <h1>Popular Series</h1>
        </Card.Title>
        <Card.Img   src={fallBackSrc} />

    </Card.Body>
</CustomCard>

<CustomCard  inicio={true} ruta={"/movies"}>

<Card.Body>
    <Card.Title>
    <h1>Popular Movies</h1>
    </Card.Title>
    <Card.Img   src={fallBackSrc} />

</Card.Body>
</CustomCard>

        </div>
        </div>
     


        

      


    </div>
    </div>
  )
}

export default Inicio;