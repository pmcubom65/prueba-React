import React, {useEffect, useState} from 'react'
import Data from '../data/sample.json';
import {Card} from 'react-bootstrap'

function Series() {

  const [series, setSeries]=useState(Data.entries.filter(element=>element.programType=='series').slice(0, 20))

  return (


    <div>
        
        <h1>Series</h1>
        
    <div class="cardClass">
        {series.map(element => (

<Card >
    <Card.Img   src={element.images["Poster Art"].url} />
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

export default Series;