import React from 'react'
import {Card} from 'react-bootstrap'

function CustomCard({children}) {
  return (
    <Card style={{margin: '2rem', borderStyle: 'solid'}}>{children}</Card>
  )
}

export default CustomCard;