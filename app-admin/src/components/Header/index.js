import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link href='/' className='navbar-brand'> Dashboard do Administrador </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav variant="pills">
            <li className='nav-item'>
              <Nav.Link href="/signin" className="nav-link">Signin</Nav.Link>
            </li>
            <li className='nav-item'>
              <Nav.Link href="/signup" className="nav-link">Signup</Nav.Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header