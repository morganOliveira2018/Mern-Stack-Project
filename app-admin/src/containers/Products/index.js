import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/UI/index';
import { addProduct } from '../../actions/product.actions';
import { getAllCategory } from '../../actions';

/**
* @author
* @function Products
**/

const Products = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const category = useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(`Products.js`);
        dispatch(getAllCategory());
    }, []);

    const handleClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("quantity", quantity);
        form.append("price", price);
        form.append("description", description);
        form.append("category", categoryId);

        for (let pic of productPictures) {
            form.append("productPicture", pic);
        }
        dispatch(addProduct(form));
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        /* console.log('Id e nome das categorias e subcategorias:', options);
        console.log('Opções de categorias:', categories); */
        return options;
    }

    const handleProductPictures = (e) => {
        setProductPictures([...productPictures, e.target.files[0]]);
        //console.log(e.target.files[0]);
    }

    /*console.log(productPictures[0]);*/
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Produtos</h3>
                            <button onClick={handleShow} style={{ marginTop: '0.25rem', borderRadius: '5px' }}>Novo Produto</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionando novo produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label="Name"
                        value={name}
                        placeholder={`Nome do produto`}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Quantidade"
                        value={quantity}
                        placeholder={`Quantidade`}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Input
                        label="Preço"
                        value={price}
                        placeholder={`Preço do produto`}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                        label="Descrição do produto"
                        value={description}
                        placeholder={`Descrição do produto`}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select
                        className="form-control"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        <option>Selecione a categoria</option>
                        {createCategoryList(category.categories).map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    {productPictures.length > 0
                        ? productPictures.map((pic, index) => (
                            <div key={index}>{pic.name}</div>
                        ))
                        : null}
                    <input
                        type="file"
                        name="productPicture"
                        onChange={handleProductPictures}
                        style={{ marginTop: '1rem' }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Layout>
    )

}

export default Products