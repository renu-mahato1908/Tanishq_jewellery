




import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { MdDelete } from 'react-icons/md';

const Wishlist = () => {

    const [wishlistproducts, setWishlistProducts] = useState([]);


    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }
        //   THIS IS FOR ADMIN PAGE ONLY
        // if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
        //   console.log(currentUser.roles[0]);

        //   navigate("/home");
        // }      
    }, [currentUser]);

    useEffect(() => {
        axios.get(` http://localhost:8090/api/wishlist/user/${currentUser.id}`).then((response) => {
            console.log(response.data);
            setWishlistProducts(response.data)
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
            console.log("successfully Added");
            window.location.reload();


        });
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8090/api/wishlist/${id}`)
            .then((response) => window.location.reload());
        console.log(id);
        console.log("successfully deleted");
        window.location.reload();
    };
    return (
        <div>
            <section className='product-data'>
                <Container>
                    <Row>
                        {
                            wishlistproducts.map((wishlistproduct, index) => {
                                return (
                                    <Col className='wishlist-product' >

                                        <Card style={{ width: '18rem', position: 'relative' }}>


                                            <Button
                                                onClick={() => handleDelete(wishlistproduct._id)}
                                                style={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    right: "10px",
                                                    border: "none",
                                                    background: "transparent",
                                                    padding: "5px"
                                                }}
                                            >
                                                <MdDelete size={22} color="red" />
                                            </Button>
                                            <Card.Body>
                                                <Card.Text>
                                                    {wishlistproduct.productId?.images?.length > 0 && (
                                                        <img
                                                            className="wishlist-img"
                                                            src={`http://localhost:8090/upload/${wishlistproduct.productId.images[0]}`}
                                                            alt={wishlistproduct.productId.productName}
                                                        />
                                                    )}
                                                    <p>{wishlistproduct.productId?.productCategory}</p>
                                                    <p>₹{wishlistproduct.productId?.productPrice}</p>
                                                    <p>{wishlistproduct.productId?.productDescription}</p>
                                                    {/* <Button type="submit" className='icon-btn-cart' onClick={() => handleCart(wishlistproduct)}><MdOutlineShoppingCart /></Button> */}

                                                </Card.Text>
                                                <Row>
                                                    {/* <Col md={5}>

                                            <Button type="submit" className='buttons'>Buy Now</Button>

                          </Col> */}
                                                    <Col md={10}>
                                                        <Button type="submit" className='buttons' onClick={() => handleCart(wishlistproduct.productId)}>Add To Cart</Button>
                                                    </Col>

                                                </Row>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }


                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Wishlist