import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import './styles.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home   
**/

const Home = (props) => {
    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                    <ul>
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        <li><NavLink to={`/produtos`}>Produtos</NavLink></li>
                        <li><NavLink to={`/pedidos`}>Pedidos</NavLink></li>
                    </ul>
                    </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>Home</Col>
                </Row>
            </Container>
            {/* <Jumbotron style={{margin: '5rem', background: '#fff'}}className='text-center'>
                <h1> Bem-vindo ao Dashboard do Admin </h1>
                <p> Nossa lojinha oferece produtos da boticário, roupas femininas dos mais diversos tamanhos, acessórios para todas os ocasiões e estilos. </p>
                <p> Atendimento: Rua Padre Assis Portela, nº 85</p>
            </Jumbotron> */}
        </Layout>
    )

}

export default Home