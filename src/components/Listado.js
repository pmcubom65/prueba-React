import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import ButtonToast from '../components/ButtonToast';
import CustomCard from './CustomCard';







function Listado({lista}) {

    const [year, setYear]=useState(0);

    const handleChange=(event)=> {
        setYear(event.target.value)
    }


  return (

    <div>

    <label style={{color : 'black'}}><h1>Filtro por año:</h1></label>

    <select onChange={handleChange}>

        <option value={0} selected="selected">Todos</option>

        {lista.map((item)=> (
            <option value={item.releaseYear} >{item.releaseYear}</option>
        ))}

       
    </select>


    <div className="cardClass">

    {year==0 ?  lista.map(element => (

<CustomCard style={{margin: '2rem'}}>
<Card.Img   src={element.images["Poster Art"].url} />
<Card.Body>
    <Card.Text>
        {element.title}
    </Card.Text>
    <ButtonToast info={element}/>

</Card.Body>
</CustomCard>


)) : lista.filter(item=> item.releaseYear==year).map(element => (

    <CustomCard style={{margin: '2rem'}}>
    <Card.Img   src={element.images["Poster Art"].url} />
    <Card.Body>
        <Card.Text>
            {element.title}
        </Card.Text>
        <ButtonToast info={element}/>
    
    </Card.Body>
    </CustomCard>
    
    
    ))}

</div>
</div>
  )
}

export default Listado