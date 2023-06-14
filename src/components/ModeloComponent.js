import React, {useState} from 'react'
import Data from '../data/sample.json';

import Listado from './Listado';
import HeaderSecundario from './HeaderSecundario';

function ModeloComponent({modelo, titulo}) {
    const compare = ( a, b ) => {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }

    const [datosIniciales, setDatosIniciales]=useState(Data.entries.filter(element=>element.programType==modelo && 
    element.releaseYear>=2010).sort(compare).slice(0, 20))


    if (datosIniciales.length===0) {
        return <h1>Loading....</h1>
    } else if (typeof datosIniciales === 'undefined'){
        return <h1>Something went wrong....</h1>
    }



  return (
    <div>
        <HeaderSecundario titulo={titulo}/>


        <Listado lista={datosIniciales} />
        
    </div>
  )
}

export default ModeloComponent