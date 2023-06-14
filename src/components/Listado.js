import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import CustomCard from './CustomCard';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import CustomImagen from './CustomImagen';
import DesplegablesFiltro from './DesplegablesFiltro';
import { useSelector } from 'react-redux';



function Listado({lista}) {

    const {data, setData, fallBackSrc}=useContext(DataContext);


    const years=[0];
    lista.map(item=> years.push(item.releaseYear))

    const yearsNotDuplicated=[...new Set(years)]

    const listadoFilter=useSelector(state=>state.listado)

    const clickCard=(item)=> {
        setData(item)
    }


  return (

    <div>

    <div className='inicio'>
    <DesplegablesFiltro nombreDesplegable={'year'} lista={yearsNotDuplicated} titulo={'Filtro por año:'} />

    <DesplegablesFiltro nombreDesplegable={'numero'} lista={[5,10,20]} titulo={'Elementos a mostrar:'} />
    </div>
    <div className="cardClass">

    {listadoFilter.year==0 ?  lista.slice(0, listadoFilter.elementosAMostrar).map((element,index) => (
<div onClick={()=>clickCard(element)} key={index}>
<CustomCard style={{margin: '2rem'}}  >

<CustomImagen element={element} fallBackSrc={fallBackSrc} />
<Card.Body>
    <Card.Text>
        {element.title}
    </Card.Text>



</Card.Body>
</CustomCard>
</div>


)) : lista.filter(item=> item.releaseYear==listadoFilter.year).slice(0, listadoFilter.elementosAMostrar).map((element,index) => (
    <div onClick={()=>clickCard(element)} key={index}>
    <CustomCard style={{margin: '2rem'}} >
    <CustomImagen element={element} fallBackSrc={fallBackSrc} />
    <Card.Body>
        <Card.Text>
            {element.title}
        </Card.Text>
    
    </Card.Body>
    </CustomCard>
    </div>
    
    
    ))}

</div>
</div>
  )
}

export default Listado;