import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';

function NavBar(props) {
  var navBarAddStyles = {
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontFamily: 'BowlbyOneSC',
    width: '80%',
    margin: '0 auto',



   };
  return (
    <div style={navBarAddStyles}>
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="#home"> 💥GotCHiMAGoTTiå 💥</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">


      <Nav className="mr-auto">
        <NavDropdown title="About" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">How to play</NavDropdown.Item>
        </NavDropdown>
      </Nav>

       <Button variant="outline-primary" ><Link to="/NewPet">Start</Link></Button>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default NavBar;
