import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
    <Link to='/' >
      <h2>DEMO Streaming</h2>
      <Navbar.Brand href="/">Demo</Navbar.Brand>
    </Link>
 
    <Link to='/'>
      <h2>Log in</h2>
    </Link>
    <Link to='/' >
      <h2>Start your free trial</h2>
    </Link>
    </Container>
  </Navbar>
  )
}

export default Header;