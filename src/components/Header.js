import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Header() {

  const baseRoute='https://pmcubom65.github.io/prueba-React';

  const navigate=useNavigate();

  return (
    <div>
      <Container fluid style={{ backgroundColor: '#40CFFF', height: '5rem' }}>
        <Row  >
          <Col md={4} style={{ textAlign: 'left', marginLeft: '5rem' }}>
            <h2><a href={baseRoute}>DEMO Streaming</a></h2>

            <Button   variant="primary" size="lg" style={{ float: 'right', marginRight: '2rem' }} onClick={()=>navigate('/movies')}>Movies</Button>

            <Button   variant="primary" size="lg" style={{ float: 'right', marginRight: '2rem'  }} onClick={()=>navigate('/series')}>Series</Button>
          </Col>

        </Row>
      </Container>



    </div>

  )
}

export default Header;