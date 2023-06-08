import React, {useState} from 'react'
import Data from '../data/sample.json';
import {Card} from 'react-bootstrap'

function Peliculas() {

    const [movies, setMovies]=useState(Data.entries.filter(element=>element.programType=='movie').slice(0, 20))



  return (
    <div>Peliculas

<div class="cardClass">

{movies.map(element => (

<Card className="cardClass">
    <Card.Img src={element.images["Poster Art"].url} />
    <Card.Body>
        <Card.Text>
            {element.title}
        </Card.Text>

    </Card.Body>
</Card>


))}







</div>


        
    </div>
  )
}

export default Peliculas;