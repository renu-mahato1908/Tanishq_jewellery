// 




import axios from "axios";
import React, { useEffect, useState } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";

const Wishlist = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user: currentUser } = useSelector((state) => state.auth);

    // 🔹 User check
    useEffect(() => {
        if (!currentUser) {
            navigate("/login"); // agar login nahi hai
        }
    }, [currentUser, navigate]);

    // 🔹 Wishlist API call
    useEffect(() => {
        if (currentUser?.id) {
            axios
                .get(`http://localhost:8090/api/wishlist/user/${currentUser.id}`)
                .then((res) => {
                    console.log("Wishlist Products:", res.data);
                    setProducts(res.data || []);
                })
                .catch((err) => {
                    console.log("Wishlist Error:", err);
                });
        }
    }, [currentUser]);

    return (
        <div>
            <section>
                <Container>
                    <Row className="mt-3">
                        <h4 className="mb-4">❤️ My Wishlist</h4>

                        {products.length === 0 && (
                            <p>No products in wishlist</p>
                        )}

                        {products.map((product, index) => (
                            <Col md={3} className="mb-4 cart" key={product._id || index}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:8090/upload/${product?.images?.[0]}`}
                                        alt={product.productName}
                                    />

                                    <Card.Body>
                                        <Card.Text>
                                            <h6>{product.productName}</h6>
                                            <p>ID: {product.productId}</p>
                                            <p>₹ {product.productPrice}</p>

                                            <button className="card-wishlist-btn">
                                                <FiHeart className="wishlist-icon" />
                                            </button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Wishlist;
