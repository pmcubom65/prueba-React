import React from 'react'
import {Card} from 'react-bootstrap'

function CustomImagen({element, fallBackSrc}) {

  return (
    <>
    <Card.Img  src={element.images['Poster Art'].url} onError={(e) => (e.currentTarget.src = fallBackSrc)}/>
    </>
  )
}

export default CustomImagen;