// // 




// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Container, Row, Col, Card } from "react-bootstrap";
// import { useNavigate } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
// import { FiHeart } from "react-icons/fi";

// const Wishlist = () => {
//     const [wishlistProducts, setwishlistProducts] = useState([]);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const { user: currentUser } = useSelector((state) => state.auth);


//     useEffect(() => {
//         if (!currentUser) {
//             navigate("/login");
//         }
//     }, [currentUser, navigate]);


//     useEffect(() => {

//             axios
//                 .get(`http://localhost:8090/api/wishlist/user/${currentUser.id}`)
//                 .then((res) => {
//                     console.log("Wishlist Products:", response.data);
//                     setwishlistProducts(response.data);
//                 })


//     }, [currentUser]);

//     return (
//         <div>
//             <section>
//                 <Container>
//                     <Row className="mt-3">
//                         <h4 className="mb-4"> Wishlist</h4>

//                         {products.length === 0 && (
//                             <p>No products in wishlist</p>
//                         )}

//                         {products.map((product, index) => (
//                             <Col md={3} className="mb-4 cart" key={product._id || index}>
//                                 <Card style={{ width: "18rem" }}>
//                                     <Card.Img
//                                         variant="top"
//                                         src={`http://localhost:8090/upload/${product?.images?.[0]}`}
//                                         alt={product.productName}
//                                     />




//                                     <Card.Body>
//                                         <Card.Text>
//                                             <h6>{product.productName}</h6>
//                                             <p>ID: {product.productId}</p>
//                                             <p>₹ {product.productPrice}</p>

//                                             <button className="card-wishlist-btn">
//                                                 <FiHeart className="wishlist-icon" />
//                                             </button>
//                                         </Card.Text>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// };

// export default Wishlist;


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


const Wishlist = () => {

    const [wishlistproducts, setWishlistProducts] = useState([]);

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }
            
    }, [currentUser]);

    useEffect(() => {
        axios.get(` http://localhost:8090/api/wishlist/user/${currentUser.id}`).then((response) => {
            console.log(response.data);
            setWishlistProducts(response.data)
        });

    }, []);

    return (
        <div>
            <section>
                <Container>
                    <Row>
                        {
                            wishlistproducts.map((wishlistproduct, index) => {
                                return (
                                    <Col className='wishlist-product' >
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{wishlistproduct.productId.productName}</Card.Title>
                                                <Card.Text>
                                                    <p><img src={`http://localhost:8090/upload/${wishlistproduct.productId.images[0]}`} /></p>
                                                    <p>{wishlistproduct.productId.productCategory}</p>
                                                    <p>₹{wishlistproduct.productId.productPrice}</p>
                                                    <p>{wishlistproduct.productId.productDescription}</p>
                                                </Card.Text>

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