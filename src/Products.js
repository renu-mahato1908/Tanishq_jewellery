import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Breadcrumb, Button ,ListGroup} from 'react-bootstrap';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router';




const Products = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssproducts").then((response) => {
            console.log(response.data);
            setproducts(response.data);
            console.log(products);
        });

    }, [products]);

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8090/api/ssproducts/${id}`).then((response) => {
            console.log(response.data);
            console.log("successfully category delete");
            window.location.reload();



        });

    }





    return (
        <div>


            <section>
                <Container>
                    <Row>
                        <Col className='heading'>
                            <h1>Products</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>

                            <Breadcrumb>
                                <Breadcrumb.Item href="Dashboard">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="Products">
                                    Products
                                </Breadcrumb.Item>

                            </Breadcrumb>
                            
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Link to={"/Addproduct"}>
                                <Button className='addbtn'>
                                    Add Products
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='canvas2'>
                        <Col md={3}>
                            <ListGroup>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Dashboard">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="" />
                                        <span><h6>Dashboard</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Account">
                                        <img src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg" alt="" />
                                        <span><h6>Account</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Addproduct">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Tr9fKwJjakFaxvBR7WFtttuKJq4lXwfnpA&s" alt="" />
                                        <span><h6>Add Product</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/Products">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1311/1311095.png" alt="" />
                                        <span><h6>Products</h6></span>
                                    </Link>
                                </ListGroup.Item>

                                <ListGroup.Item className="menuItem">
                                    <Link to="/AddCategory">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg" alt="" />
                                        <span><h6>Add Category</h6></span>
                                    </Link>
                                </ListGroup.Item>


                                <ListGroup.Item className="menuItem">
                                    <Link to="/OrdersDetail">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg" alt="" />
                                        <span><h6>Orders </h6></span>
                                    </Link>
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>
                        <Col md={9}>

                            {/* <h4>Products</h4> */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th> Name</th>
                                        <th>Image</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Gender</th>
                                        <th>Delete</th>
                                        {/* <th>Edit</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => {
                                            return (



                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{product.productName}</td>
                                                    {/* <td>{<img src={product.images[0]}/>}</td> */}
                                                    <td><img src={`http://localhost:8090/upload/${product.images[0]}`} alt='img' /></td>


                                                    <td>{product.productCategory}</td>
                                                    <td>₹{product.productPrice}</td>
                                                    <td>{product.productDescription}</td>
                                                    <td>{product.productGender}</td>
                                                    <td><button onClick={() => handleDelete(product.id)}>
                                                        {<RiDeleteBinLine />}</button></td>

                                                    {/* <td>{<FiEdit />}</td> */}




                                                </tr>
                                            )
                                        })


                                    }
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Products