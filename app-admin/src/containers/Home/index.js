import React from 'react';
import Layout from '../../components/Layout';
import './styles.css';
// import { Col, Row, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';


/**
* @author
* @function Home   
**/

const Home = (props) => {
    return (
        <Layout sidebar>
            Home
        </Layout>
    )

}

export default Home

{/* <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                    <ul>
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        <li><NavLink to={`/category`}>Categorias</NavLink></li>
                        <li><NavLink to={`/produtos`}>Produtos</NavLink></li>
                        <li><NavLink to={`/pedidos`}>Pedidos</NavLink></li>
                    </ul>
                    </Col>
                    <Col md={10} style={{ marginLeft: 'auto' }}>Home</Col>
                </Row>
</Container> */}