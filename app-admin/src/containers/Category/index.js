import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getAllCategory } from '../../actions';
import Input from '../../components/UI/index';

/**
* @author
* @function Category
**/

const Category = (props) => {
    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(`Category.js`);
        dispatch(getAllCategory());
    }, []);

    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        /*const cat = {
            categoryName,
            parentCategoryId,
            categoryImage
        }; */
        /*console.log(cat);*/
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let Mycategories = [];

        for (let category of categories) {
            Mycategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
        return Mycategories;
    }

    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    return (
        <Layout sidebar>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Categorias</h3>
                            <button onClick={handleShow} style={{ marginTop: '0.25rem', borderRadius: '5px' }}>Nova categoria</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                            {/* {JSON.stringify(createCategoryList(category.categories))} */}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionando nova categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={categoryName}
                        placeholder={`Nome da categoria`}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <select
                        className="form-control"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}
                    >
                        <option>selecione uma categoria</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                    <input
                        style={{ marginTop: '10px' }}
                        type="file"
                        name="categoryImage"
                        onChange={handleCategoryImage}
                    >
                    </input>

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

export default Category