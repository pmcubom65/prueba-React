import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#40CFFF', height: '5rem' }}>
        <Row  >
          <Col md={4} style={{ textAlign: 'left', marginLeft: '5rem' }}>
            <h2><a href="/">DEMO Streaming</a></h2>

            <a style={{ float: 'right', marginRight: '2rem' }} href="/movies">Movies</a>

            <a style={{ float: 'right', marginRight: '2rem'  }}  href="/series">Series</a>
          </Col>

        </Row>
      </Container>



    </div>

  )
}

export default Header;