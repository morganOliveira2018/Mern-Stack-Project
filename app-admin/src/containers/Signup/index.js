import React, { useState } from 'react'
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../actions';

/**
* @author
* @function Signup
**/

const Signup = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const userSignup = (e) => {

    e.preventDefault();

    const user = {
      firstName, lastName, email, password
    }

    dispatch(signup(user));

  }

  if (auth.authenticate) { // se autenticacao for verdade
    return <Redirect to={`/`} />
  }

  if(user.loading){
    return <Redirect to={`/signin`} />
  }

  return (
    <Layout>
      <Container>
        { user.message }
        <Row style={{ margin: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="Primeiro nome"
                    placeholder="Digite seu primeiro nome"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Último nome"
                    placeholder="Digite seu último nome"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

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

export default Signup;