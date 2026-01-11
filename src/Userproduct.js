
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch} from "react-redux";
import { logout } from './slices/auth';

import { useNavigate } from "react-router";
import { FiHeart } from "react-icons/fi";


const Userproduct = () => {

    const [products, setProducts] = useState([]);

    let navigate = useNavigate();
      const dispatch = useDispatch();
      const { user: currentUser } = useSelector((state) => state.auth);
      useEffect(() => {
        if (currentUser) {
          console.log(currentUser);
        }
        if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
          console.log(currentUser.roles[0]);
    
          navigate("/Userproduct");
        }
      }, []);
    
      const handleLogout = () => {
        dispatch(logout());
        navigate('/login'); // Redirect to login page
        window.location.reload();
      };




    useEffect(() => {
        axios.get("http://localhost:8090/api/ssproducts").then((response) => {
            console.log(response.data);
            setProducts(response.data);
            console.log(products);
        });

    }, []);

    const handleCart = (product) => {
        console.log(product);

        const data = {
            userId: currentUser.id,
            items: [{
                productId: product.id,
                quantity: 1,
                price: product.productPrice
            }]
        }

        axios.post(`http://localhost:8090/api/carts`, data).then((response) => {
            console.log(response.data);

            window.location.reload();
            console.log("Upload success:", response.data);
            alert("Product add to cart successfully!");
        });


    }

     const handleWishlist = (product) => {
        console.log(product);

        const data = {
            userId: currentUser.id,
            items: [{
                productId: product.id,
                quantity: 1,
                price: product.productPrice
            }]
        }

        axios.post(`http://localhost:8090/api/carts`, data).then((response) => {
            console.log(response.data);

            window.location.reload();
            console.log("Upload success:", response.data);
            alert("Product added to wishlist!");
        });


    }

     

    return (
        <div>
            <section>
                <Container>
                    <Row className='mapingimage'>


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
                                                    <button className='card-wishlist-btn'><FiHeart className="wishlist-icon" /></button>

                                                </Card.Text>
                                                {/* <Button variant="primary" onClick={() => handleCart(product)}>Add to cart</Button> */}
                                                <Col>
                                                    <Button type='submit' onClick={() => handleCart(product)}>Add to cart</Button>

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

export default Userproduct