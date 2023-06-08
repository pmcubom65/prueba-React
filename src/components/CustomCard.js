import React, {useState} from 'react'
import {Card} from 'react-bootstrap'

function CustomCard({children}) {

    const [styleCard, setStyleCard]=useState({margin: '2rem', borderStyle: 'solid'})

    const handleHover= ()=> {
        setStyleCard({margin: '2rem', borderColor: 'white', opacity : '0.9'})
    }


    const handleLeave= ()=> {
        setStyleCard({margin: '2rem', borderStyle: 'solid'})
    }

  return (
    <Card style={styleCard} onMouseOver={handleHover} onMouseLeave={handleLeave}>{children}</Card>
  )
}

export default CustomCard;