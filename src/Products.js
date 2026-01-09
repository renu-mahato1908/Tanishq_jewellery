import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";




const Products = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8090/api/ssproducts").then((response) => {
            console.log(response.data);
            setproducts(response.data);
            console.log(products);
        });

    }, []);

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
                    <Row className='mapingimage'>
                        <Col>

                            <h4>Products</h4>
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
                                        <th>Edit</th>
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
                                                    <td><img src={`http://localhost:8090/upload/${product.images[0]}`} /></td>


                                                    <td>{product.productCategory}</td>
                                                    <td>{product.productPrice}</td>
                                                    <td>{product.productDescription}</td>
                                                    <td>{product.productGender}</td>
                                                    <td><button onClick={() => handleDelete(product.id)}>
                                                        {<RiDeleteBinLine />}</button></td>

                                                    <td>{<FiEdit />}</td>




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