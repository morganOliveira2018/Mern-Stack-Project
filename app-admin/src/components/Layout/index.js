import React from 'react'
import Header from '../Header';
import { Col, Row, Container } from 'react-bootstrap';
/* import './style.css'; */

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
              {/* “md” para telas de 992px até 1200px  */}
              <Col md={10}>
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