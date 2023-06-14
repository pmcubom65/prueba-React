import React from 'react'
import {Card} from 'react-bootstrap'

function CustomImagen({element, fallBackSrc}) {

  return (
    <div  className="loading">
    <Card.Img  src={element!=null ? element.images['Poster Art'].url : ''} onError={(e) => (e.currentTarget.src = fallBackSrc)}/>
    </div>
  )
}




export default CustomImagen;