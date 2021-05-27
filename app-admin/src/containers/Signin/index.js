import React, { useState } from 'react'
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';

/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useSelector(state => state.auth); // executará seu seletor sempre que uma ação for despachada

  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();

    const user = {
      email,
      password
    }

    dispatch(login(user));
  }

  if (auth.authenticate) { // se autenticacao for verdade
    return <Redirect to={`/`} />
  }

  return (
    <Layout>
      <Container>
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Digite seu Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Senha"
                placeholder="Digite sua senha"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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

export default Signin;