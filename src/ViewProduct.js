
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FiHeart } from "react-icons/fi";
// import { useNavigate } from "react-router";



const ViewProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});


    // let navigate = useNavigate();
    // const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }

    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8090/api/ssproducts/${productId}`)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((err) => console.log(err));
    }, [productId]);




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



    return (
        <div>
            <section style={{ marginTop: "30px" }}>
                <Container>
                    <Row className="align-items-center">

                       

                        <Col md={6}  className="text-center mb-3">

                            <div style={{ position: "relative", display: "inline-block" }}>

                                
                                <img
                                    src={`http://localhost:8090/upload/${product?.images?.[0]}`}
                                    alt="product"
                                    style={{
                                        width: "100%",
                                        maxWidth: "400px",
                                        borderRadius: "10px",
                                      
                                    }}
                                />

                                
                                <button
                                    
                                    onClick={() => handleWishlist(product)}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        background: "white",
                                        border: "none",
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                        
                                    }}
                                >
                                    <FiHeart />
                                </button>

                            </div>

                        </Col>

                        {/* RIGHT: DETAILS */}
                        <Col md={6}>
                            <Card style={{ padding: "20px", border: "none" }}>

                                <h4>{product.productName}</h4>

                                <h4 style={{ color: "green" }}>
                                    ₹ {product.productPrice}
                                </h4>

                                <p>
                                    <strong>Category:</strong> {product.productCategory}
                                </p>

                                <p>
                                    <strong>Gender:</strong> {product.productGender}
                                </p>

                                <p>
                                    <strong>Description:</strong> {product.productDescription}
                                </p>



                                

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                                        
                                        style={{ marginTop: "10px", width: "150px" }}
                                        className="addbtn" onClick={() => handleCart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>

                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ViewProduct;