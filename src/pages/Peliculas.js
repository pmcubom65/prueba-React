import React, {useState} from 'react'
import Data from '../data/sample.json';
import {Card} from 'react-bootstrap'
import ButtonToast from '../components/ButtonToast';


function Peliculas() {

    const compare = ( a, b ) => {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }

    const [movies, setMovies]=useState(Data.entries.filter(element=>element.programType=='movie' && 
    element.releaseYear>=2010).sort(compare).slice(0, 20))


    if (movies.length===0) {
        return <h1>Loading....</h1>
    } else if (typeof movies === 'undefined'){
        return <h1>Something went wrong....</h1>
    }



  return (
    <div>
        <h1>Peliculas</h1>

<div class="cardClass">

{movies.map(element => (

<Card style={{ width: '18rem', height : '18rem' }}>
    <Card.Img src={element.images["Poster Art"].url} variant="top" />
    <Card.Body>
        <Card.Text>
            {element.title}
        </Card.Text>
        <ButtonToast info={element}/>

    </Card.Body>
</Card>


))}







</div>


        
    </div>
  )
}

export default Peliculas;