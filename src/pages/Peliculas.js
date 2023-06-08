import React, {useState} from 'react'
import Data from '../data/sample.json';
import {Card} from 'react-bootstrap'
import ButtonToast from '../components/ButtonToast';
import Listado from '../components/Listado';


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
        <h1 style={{color : 'black'}}>Peliculas</h1>





        <Listado lista={movies} />
        
    </div>
  )
}

export default Peliculas;