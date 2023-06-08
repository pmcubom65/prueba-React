import React from 'react'
import {Card} from 'react-bootstrap'
import ButtonToast from '../components/ButtonToast';
function Listado({lista}) {






  return (
    <div class="cardClass">
    {lista.map(element => (

<Card >
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
  )
}

export default Listado