import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  }

  const renderLoggedLinks = () => {
    return (
      <Nav>
        <li className='nav-item'>
          <span className="nav-link" onClick={logout}>Signout</span>
        </li>
      </Nav>
    );
  }

  /* essa funcao é retornada quando não esta logada, disponibilizando Signin e Signup */
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className='nav-item'>
          <Nav.Link href="/signin" className="nav-link">Signin</Nav.Link>
        </li>
        <li className='nav-item'>
          <Nav.Link href="/signup" className="nav-link">Signup</Nav.Link>
        </li>
      </Nav>
    );
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
        <Link href='/' className='navbar-brand'> Dashboard do Administrador </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          {auth.authenticate ? renderLoggedLinks() : renderNonLoggedInLinks()}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;