import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeaderSecundario({titulo}) {
  return (
    <Container fluid style={{backgroundColor : 'grey'}}>
    <Row  >
      <Col style={{textAlign: 'left', marginLeft : '5rem', marginBottom: '5rem'}}><h2>{titulo}</h2></Col>
     

    </Row>
  </Container>
  )
}

export default HeaderSecundario