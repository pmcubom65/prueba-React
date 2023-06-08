import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <div>
    <Container fluid style={{backgroundColor : '#40CFFF'}}>
      <Row  >
        <Col md={4} style={{textAlign: 'left', marginLeft: '5rem'}}><h2><a href="/">DEMO Streaming</a></h2></Col>
       
        <Col  style={{textAlign: 'right'}}><a>Login</a></Col>
        <Col  style={{textAlign: 'right'}}><Button>Start your free trial</Button></Col>
      </Row>
    </Container>

    

    </div>
    
  )
}

export default Header;