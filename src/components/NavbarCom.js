import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.png'

const NavbarCom = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand href="#home"><Image src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='m-3'>HOME</Nav.Link>
            <Nav.Link href="#link" className='m-3'>ABOUT US</Nav.Link>
            <Nav.Link href="#link" className='m-3'>SERVICES</Nav.Link>
            <Nav.Link href="#link" className='m-3'>CONTACT US</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCom
