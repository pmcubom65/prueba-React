import React, {useEffect, useState} from 'react'
import Data from '../data/sample.json';

import Listado from '../components/Listado';

function Series() {

    const compare = ( a, b ) => {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }




  const [series, setSeries]=useState(Data.entries.filter(element=>element.programType=='series'
  && element.releaseYear>=2010).sort(compare).slice(0, 20))



  
  if (series.length===0) {
    return <h1>Loading....</h1>
} else if (typeof series === 'undefined'){
    return <h1>Something went wrong....</h1>
}

  return (


    <div>
        
        <h1>Series</h1>
        
          <Listado lista={series} />
    </div>

  )
}

export default Series;