import React, {useState} from 'react'
import {Card} from 'react-bootstrap'

import CustomCard from './CustomCard';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';



function Listado({lista}) {

    const [year, setYear]=useState(0);


    const {data, setData}=useContext(DataContext);


    const handleChange=(event)=> {
        setYear(event.target.value)
    }

    const years = [];
    lista.map(item=> years.push(item.releaseYear))
    const yearsNotDuplicated=[...new Set(years)]


    const clickCard=(item)=> {
        console.log('clickcardcontext'+item)
        setData(item)
    }


  


  return (

    <div>

    <label style={{color : 'black'}}><h1>Filtro por año:</h1></label>

    <select onChange={handleChange}>

        <option value={0} selected="selected">Todos</option>

        {yearsNotDuplicated.map((item)=> (
            <option value={item} >{item}</option>
        ))}

       
    </select>


    <div className="cardClass">

    {year==0 ?  lista.map(element => (
<div onClick={()=>clickCard(element)}>
<CustomCard style={{margin: '2rem'}}  >
<Card.Img   src={element.images["Poster Art"].url}/>
<Card.Body>
    <Card.Text>
        {element.title}
    </Card.Text>



</Card.Body>
</CustomCard>
</div>


)) : lista.filter(item=> item.releaseYear==year).map(element => (
    <div onClick={()=>clickCard(element)}>
    <CustomCard style={{margin: '2rem'}} >
    <Card.Img   src={element.images["Poster Art"].url} />
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