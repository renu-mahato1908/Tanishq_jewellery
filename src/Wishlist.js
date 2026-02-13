import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Card,Button } from 'react-bootstrap'
import { useNavigate } from "react-router";
import { useSelector, useDispatch} from "react-redux";
import { logout } from './slices/auth';






const Wishlist = () => {

      const [products, setProducts] = useState([]);
    
        let navigate = useNavigate();
          const dispatch = useDispatch();
          const { user: currentUser } = useSelector((state) => state.auth);
          useEffect(() => {
            if (currentUser) {
              console.log(currentUser);
            }
           
          }, []);
        
          
    
    
    
    
        useEffect(() => {
            axios.get(`http://localhost:8090/api/wishlist/user/${currentUser.id}`).then((response) => {
                console.log(response.data);
                setProducts(response.data);
                console.log(products);
            });
    
        }, []);

   
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <h4>Products</h4>
                        {
                            products.map((product, index) => {
                                return (
                                    <Col className='cart'>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" />
                                            <Card.Body>

                                                <Card.Text>

                                                    <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                                                    <p>{product.productName}</p>
                                                    <p>{product.productId}</p>
                                                    <p> {product.productPrice}</p> 
                                                     {/* <button className='card-wishlist-btn'><FiHeart className="wishlist-icon" /></button> */}

                                                </Card.Text>
                                                {/* <Button variant="primary" onClick={() => handleCart(product)}>Add to cart</Button> */}
                                                <Col>
                                                    {/* <Button type='submit' onClick={() => handleWishlist()}>Add to cart</Button> */}

                                                </Col>
                                            </Card.Body>
                                        </Card>

                                    </Col>




                                )
                            })


                        }
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Wishlist