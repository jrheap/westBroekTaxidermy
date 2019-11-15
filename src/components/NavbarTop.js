import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Slogo from "../pages/BGimages/simplifiedwhite.png";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";



function navbarTop() {
 

  return (
    
    
    <Navbar justify bg="dark" expand="lg" >
  <Navbar.Brand href="/"><img id="smalllogo" alt="Small logo" src= {Slogo}/>
</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav activeKey="" className="mr-auto ">
      <Nav.Link   href="./About">About Me</Nav.Link>
          <Nav.Link href="./Gallery">Gallery</Nav.Link>
          <Nav.Link href="./Awards">Awards</Nav.Link>
      <Nav.Link href="./Services">Services</Nav.Link>
      <Nav.Link href="./Contact">Contact</Nav.Link>
      <Nav.Link href="./Reviews">Reviews</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
    </Navbar>
  );
}



export default navbarTop;
