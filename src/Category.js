
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { FiHeart } from "react-icons/fi";
import { Container, Row, Col, Card ,Button} from 'react-bootstrap'



const Category = () => {
    const [products, setProducts] = useState([]);

    const { categoryName } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
            console.log(response.data);
            setProducts(response.data);
            console.log(products);
        });

    }, [categoryName]);






    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                        <h1>{categoryName}</h1>
                        </Col>
                    </Row>
                    <Row className='mapingimage'>


                        <h4>Products</h4>
                        {
                            products.map((product, index) => {
                                return (
                                    <Col className='cart'>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top"/>
                                            <Card.Body>

                                                <Card.Text>

                                                    <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                                                    <p>{product.productName}</p>
                                                    <p>{product.productId}</p>
                                                    <p> {product.productPrice}</p>
                                                    <button className='card-wishlist-btn' ><FiHeart className="wishlist-icon" /></button>

                                                </Card.Text>
                                                {/* <Button variant="primary" onClick={() => handleCart(product)}>Add to cart</Button> */}
                                                <Col>
                                                    <Button type='submit' >Add to cart</Button>

                                                </Col>
                                            </Card.Body>
                                        </Card>

                                    </Col>




                                )
                            })


                        }


                    </Row>

                </Container >
            </section>
        </div>
    )
}

export default Category