import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home   
**/

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron style={{margin: '5rem', background: '#fff'}}className='text-center'>
                <h1> Bem-vindo ao Dashboard do Admin </h1>
                <p> Nossa lojinha oferece produtos da boticário, roupas femininas dos mais diversos tamanhos, acessórios para todas os ocasiões e estilos. </p>
                <p> Atendimento: Rua Padre Assis Portela, nº 85</p>
            </Jumbotron>
        </Layout>
    )

}

export default Home