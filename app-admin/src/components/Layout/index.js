import React from 'react'
import Header from '../Header';
import { Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?
          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink to={`/`}>Home</NavLink></li>
                  <li><NavLink to={`/produtos`}>Produtos</NavLink></li>
                  <li><NavLink to={`/pedidos`}>Pedidos</NavLink></li>
                </ul>
              </Col>
              {/* “md” para telas de 992px até 1200px  */}
              <Col md={10} style={{ marginLeft: 'auto' }}>
                {props.children}
              </Col>
            </Row>
          </Container>
          : props.children
      }
    </>
  )

}

export default Layout;