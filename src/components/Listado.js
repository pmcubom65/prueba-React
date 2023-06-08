import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import ButtonToast from '../components/ButtonToast';







function Listado({lista}) {

    const [year, setYear]=useState(0);

    const handleChange=(event)=> {
        setYear(event.target.value)
    }


  return (

    <div>

    <label style={{color : 'black'}}>Filtro por año:</label>

    <select onChange={handleChange}>

        {lista.map((item)=> (
            <option value={item.releaseYear} >{item.releaseYear}</option>
        ))}


    </select>






    <div class="cardClass">

    {year==0 ?  lista.map(element => (

<Card style={{margin: '2rem'}}>
<Card.Img   src={element.images["Poster Art"].url} />
<Card.Body>
    <Card.Text>
        {element.title}
    </Card.Text>
    <ButtonToast info={element}/>

</Card.Body>
</Card>


)) : lista.filter(item=> item.releaseYear==year).map(element => (

    <Card style={{margin: '2rem'}}>
    <Card.Img   src={element.images["Poster Art"].url} />
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

export default Listado