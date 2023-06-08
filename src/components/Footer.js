import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {




  return (
    <div className="footer">
    <Container fluid>
      <Row>
        <Col style={{textAlign: 'left', marginLeft: '5rem'}}>HOME | TERMS AND CONDITIONS | PRIVACY POLICY </Col>
      </Row>
      <Row>
        <Col style={{textAlign: 'left', marginLeft: '5rem'}}>Copyright </Col>
      </Row>
      <Row>
        <Col lg={1} style={{ marginLeft: '5rem'}}>

            
            <img src="/social/facebook-white.svg" style={{width: '2rem', height: '2.5rem', margin:'1rem', float: 'left'}}/>
            <img src="/social/twitter-white.svg" style={{width: '3rem', height: 'auto', margin:'1rem', float: 'left'}}  />
            <img src="/social/instagram-white.svg"  style={{width: '3rem', height: 'auto', margin:'1rem', float: 'left'}} />
            <img src="/store/app-store.svg" style={{width: '5rem', height: 'auto', margin:'1rem', float: 'right'}}/>
            <img src="store/play-store.svg" style={{width: '5rem', height: 'auto', margin:'1rem', float: 'right'}}  />
            <img src="store/windows-store.svg"  style={{width: '5rem', height: 'auto', margin:'1rem', float: 'right'}} />



        </Col>
  
      </Row>
    </Container>
</div>
  )
}

export default Footer