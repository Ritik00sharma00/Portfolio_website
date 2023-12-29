import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from '../NavLinks';

const NavComp = () => {
  return (
<>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{
                          color:"purple",
                          background:"cyan",
                          padding:"5px",
                          margin:"10px",
                          fontSize:"20px",
                          fontWeight:"100px",
                          borderRadius:"20px"}}>RKS Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavLinks text={"Home"} linkname={'/'} />
            <NavLinks text={"Education"} linkname={'/Education'} />
            <NavLinks text={"Projects"}linkname={'/Projects'} />
            <NavLinks text={"Skills"} linkname={'/Skills'} />  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>
  )
}

export default NavComp
