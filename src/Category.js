
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { FiHeart } from "react-icons/fi";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router";



const Category = () => {
    const [products, setProducts] = useState([]);

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }
        if (currentUser && currentUser.roles[0] == "ROLE_ADMIN") {
            console.log(currentUser.roles[0]);

            navigate("/Userproduct");
        }
    }, []);

    const { categoryName } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
            console.log(response.data);
            setProducts(response.data);
            console.log(products);
        });

    }, [categoryName]);



    // ////


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
            productId: product.id,
        }
        // try{
        console.log(data)
        axios.post(`http://localhost:8090/api/wishlist`, data).then((response) => {
            console.log(response.data);
            console.log("successfully Added to wishlist");
            window.location.reload();


        })
            .catch((error) => {
                console.log(error.response)
                if (error.response?.status === 409) {
                    alert("product already in wishlist")
                }
                else {
                    alert("Something wrong")
                }
            })

    }






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


                        {/* <h4>Products</h4> */}
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
                                                    <p> ₹&nbsp;{product.productPrice}</p>
                                                    <button className='card-wishlist-btn' onClick={() => handleWishlist(product)} ><FiHeart className="wishlist-icon" /></button>

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

export default Category










