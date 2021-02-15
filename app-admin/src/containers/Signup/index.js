import React from 'react'
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="Primeiro nome"
                    placeholder="Digite seu primeiro nome"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Último nome"
                    placeholder="Digite seu último nome"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Digite seu Email"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Senha"
                placeholder="Digite sua senha"
                value=""
                type="password"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default Signup