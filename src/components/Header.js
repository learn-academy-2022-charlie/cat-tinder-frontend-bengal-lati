import React from 'react'
import { Nav, NavDropdown} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import firelogo from '../assets/firelogo.png'


export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        
        <Navbar.Brand href="http://localhost:3001/">
           <img
           src={firelogo}
           width="30"
           height="30"
           alt=""
           className="d-inline-block alight-top"
           />
           Cinder 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Do more" id="collasible-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3001/carindex"> See them all </NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3001/carnew"> Make some new memories </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </>
  )
}
