import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import CustomCard from './CustomCard';
import { useContext, useEffect } from 'react';
import { DataContext } from '../Context/DataContext';
import CustomImagen from './CustomImagen';
import DesplegablesFiltro from './DesplegablesFiltro';
import { useSelector } from 'react-redux';
import PaginationComponent from './PaginationComponent';
import { useDispatch } from 'react-redux';



function Listado({lista}) {

    const {data, setData, fallBackSrc}=useContext(DataContext);

    const dispatch=useDispatch();

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
    <DesplegablesFiltro nombreDesplegable={'year'} lista={yearsNotDuplicated} titulo={'Filtro por año:'} listaGlobal={lista}/>

    <DesplegablesFiltro nombreDesplegable={'numero'} lista={[5,10,20]} titulo={'Elementos por página:'} listaGlobal={lista}/>
    </div>

    {listadoFilter.total > listadoFilter.elementosAMostrar && <PaginationComponent />}

    <div className="cardClass">

    

    {listadoFilter.year==0 ?  lista.slice(listadoFilter.inicio, listadoFilter.fin).map((element,index) => (
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


)) : lista.filter(item=> item.releaseYear==listadoFilter.year).slice(listadoFilter.inicio, listadoFilter.fin).map((element,index) => (
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